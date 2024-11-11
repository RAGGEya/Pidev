import {Component, OnInit} from '@angular/core';
import {PageResponseBorrowedBikeResponse} from '../../../../services/models/page-response-borrowed-bike-response';
import {BikeService} from '../../../../services/services/bike.service';
import {BorrowedBikeResponse} from '../../../../services/models/borrowed-bike-response';

@Component({
  selector: 'app-returned-bikes',
  templateUrl: './returned-bikes.component.html',
  styleUrls: ['./returned-bikes.component.scss']
})
export class ReturnedBikesComponent implements OnInit {

  page = 0;
  size = 5;
  pages: any = [];
  returnedBikes: PageResponseBorrowedBikeResponse = {};
  message = '';
  level: 'success' |'error' = 'success';
  constructor(
    private bikeService: BikeService
  ) {
  }

  ngOnInit(): void {
    this.findAllReturnedBikes();
  }

  private findAllReturnedBikes() {
    this.bikeService.findAllReturnedBikes({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (resp) => {
        this.returnedBikes = resp;
        this.pages = Array(this.returnedBikes.totalPages)
          .fill(0)
          .map((x, i) => i);
      }
    });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllReturnedBikes();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllReturnedBikes();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllReturnedBikes();
  }

  goToLastPage() {
    this.page = this.returnedBikes.totalPages as number - 1;
    this.findAllReturnedBikes();
  }

  goToNextPage() {
    this.page++;
    this.findAllReturnedBikes();
  }

  get isLastPage() {
    return this.page === this.returnedBikes.totalPages as number - 1;
  }

  approveBikeReturn(bike: BorrowedBikeResponse) {
    if (!bike.returned) {
      return;
    }
    this.bikeService.approveReturnBorrowBike({
      'bike-id': bike.id as number
    }).subscribe({
      next: () => {
        this.level = 'success';
        this.message = 'Bike return approved';
        this.findAllReturnedBikes();
      }
    });
  }
}
