import {Component, OnInit} from '@angular/core';
import {BikeService} from '../../../../services/services/bike.service';
import {PageResponseBorrowedBikeResponse} from '../../../../services/models/page-response-borrowed-bike-response';
import {BorrowedBikeResponse} from '../../../../services/models/borrowed-bike-response';
import {BikeResponse} from '../../../../services/models/bike-response';
import {FeedbackRequest} from '../../../../services/models/feedback-request';
import {FeedbackService} from '../../../../services/services/feedback.service';

@Component({
  selector: 'app-borrowed-bike-list',
  templateUrl: './borrowed-bike-list.component.html',
  styleUrls: ['./borrowed-bike-list.component.scss']
})
export class BorrowedBikeListComponent implements OnInit {
  page = 0;
  size = 5;
  pages: any = [];
  borrowedBikes: PageResponseBorrowedBikeResponse = {};
  selectedBike: BikeResponse | undefined = undefined;
  feedbackRequest: FeedbackRequest = {bikeId: 0, comment: '', note: 0};
  constructor(
    private bikeService: BikeService,
    private feedbackService: FeedbackService
  ) {
  }
  ngOnInit(): void {
    this.findAllBorrowedBikes();
  }

  private findAllBorrowedBikes() {
    this.bikeService.findAllBorrowedBikes({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (resp) => {
        this.borrowedBikes = resp;
        this.pages = Array(this.borrowedBikes.totalPages)
          .fill(0)
          .map((x, i) => i);
      }
    });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllBorrowedBikes();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBorrowedBikes();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllBorrowedBikes();
  }

  goToLastPage() {
    this.page = this.borrowedBikes.totalPages as number - 1;
    this.findAllBorrowedBikes();
  }

  goToNextPage() {
    this.page++;
    this.findAllBorrowedBikes();
  }

  get isLastPage() {
    return this.page === this.borrowedBikes.totalPages as number - 1;
  }

  returnBorrowedBike(bike: BorrowedBikeResponse) {
    this.selectedBike = bike;
    this.feedbackRequest.bikeId = bike.id as number;
  }

  returnBike(withFeedback: boolean) {
    this.bikeService.returnBorrowBike({
      'bike-id': this.selectedBike?.id as number
    }).subscribe({
      next: () => {
        if (withFeedback) {
          this.giveFeedback();
        }
        this.selectedBike = undefined;
        this.findAllBorrowedBikes();
      }
    });
  }

  private giveFeedback() {
    this.feedbackService.saveFeedback({
      body: this.feedbackRequest
    }).subscribe({
      next: () => {
      }
    });
  }
}
