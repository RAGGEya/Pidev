import {Component, OnInit} from '@angular/core';
import {BikeService} from '../../../../services/services/bike.service';
import {PageResponseBikeResponse} from '../../../../services/models/page-response-bike-response';
import {BikeResponse} from '../../../../services/models/bike-response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikeListComponent implements OnInit {
  bikeResponse: PageResponseBikeResponse = {};
  page = 0;
  size = 5;
  pages: any = [];
  message = '';
  level: 'success' |'error' = 'success';

  constructor(
    private bikeService: BikeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.findAllBikes();
  }

  private findAllBikes() {
    this.bikeService.findAllBikes({
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

  borrowBike(bike: BikeResponse) {
    this.message = '';
    this.level = 'success';
    this.bikeService.borrowBike({
      'bike-id': bike.id as number
    }).subscribe({
      next: () => {
        this.level = 'success';
        this.message = 'Bike successfully added to your list';
      },
      error: (err) => {
        console.log(err);
        this.level = 'error';
        this.message = err.error.error;
      }
    });
  }

  displayBikeDetails(bike: BikeResponse) {
    this.router.navigate(['bikes', 'details', bike.id]);
  }
}
