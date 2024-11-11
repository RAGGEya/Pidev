import {Component, OnInit} from '@angular/core';
import {PageResponseBikeResponse} from '../../../../services/models/page-response-bike-response';
import {BikeService} from '../../../../services/services/bike.service';
import {BikeResponse} from '../../../../services/models/bike-response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-bikes',
  templateUrl: './my-bikes.component.html',
  styleUrls: ['./my-bikes.component.scss']
})
export class MyBikesComponent implements OnInit {

  bikeResponse: PageResponseBikeResponse = {};
  page = 0;
  size = 5;
  pages: any = [];

  constructor(
    private bikeService: BikeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.findAllBikes();
  }

  private findAllBikes() {
    this.bikeService.findAllBikesByOwner({
      page: this.page,
      size: this.size
    })
      .subscribe({
        next: (bikes) => {
          this.bikeResponse = bikes;
          this.pages = Array(this.bikeResponse.totalPages)
            .fill(0)
            .map((x, i) => i);
        }
      });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllBikes();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBikes();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllBikes();
  }

  goToLastPage() {
    this.page = this.bikeResponse.totalPages as number - 1;
    this.findAllBikes();
  }

  goToNextPage() {
    this.page++;
    this.findAllBikes();
  }

  get isLastPage() {
    return this.page === this.bikeResponse.totalPages as number - 1;
  }

  archiveBike(bike: BikeResponse) {
    this.bikeService.updateArchivedStatus({
      'bike-id': bike.id as number
    }).subscribe({
      next: () => {
        bike.archived = !bike.archived;
      }
    });
  }

  shareBike(bike: BikeResponse) {
    this.bikeService.updateShareableStatus({
      'bike-id': bike.id as number
    }).subscribe({
      next: () => {
        bike.shareable = !bike.shareable;
      }
    });
  }

  editBike(bike: BikeResponse) {
    this.router.navigate(['bikes', 'manage', bike.id]);
  }
}
