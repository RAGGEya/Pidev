import {Component, OnInit} from '@angular/core';
import {BikeRequest} from '../../../../services/models/bike-request';
import {BikeService} from '../../../../services/services/bike.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-manage-bike',
  templateUrl: './manage-bike.component.html',
  styleUrls: ['./manage-bike.component.scss']
})
export class ManageBikeComponent implements OnInit {

  errorMsg: Array<string> = [];
  bikeRequest: BikeRequest = {
    manufacturer: '',
    serialNumber: '',
    description: '',
    title: ''
  };
  selectedBikeCover: any;
  selectedPicture: string | undefined;

  constructor(
    private bikeService: BikeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const bikeId = this.activatedRoute.snapshot.params['bikeId'];
    if (bikeId) {
      this.bikeService.findBikeById({
        'bike-id': bikeId
      }).subscribe({
        next: (bike) => {
         this.bikeRequest = {
           id: bike.id,
           title: bike.title as string,
           manufacturer: bike.manufacturer as string,
           serialNumber: bike.serialNumber as string,
           description: bike.description as string,
           shareable: bike.shareable
         };
         this.selectedPicture='data:image/jpg;base64,' + bike.cover;
        }
      });
    }
  }

  saveBike() {
    this.bikeService.saveBike({
      body: this.bikeRequest
    }).subscribe({
      next: (bikeId) => {
        this.bikeService.uploadBikeCoverPicture({
          'bike-id': bikeId,
          body: {
            file: this.selectedBikeCover
          }
        }).subscribe({
          next: () => {
            this.router.navigate(['/bikes/my-bikes']);
          }
        });
      },
      error: (err) => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedBikeCover = event.target.files[0];
    console.log(this.selectedBikeCover);

    if (this.selectedBikeCover) {

      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.selectedBikeCover);
    }
  }
}
