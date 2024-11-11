import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikeRoutingModule } from './bike-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { BikeListComponent } from './pages/bike-list/bike-list.component';
import { BikeCardComponent } from './components/bike-card/bike-card.component';
import { MyBikesComponent } from './pages/my-bikes/my-bikes.component';
import { ManageBikeComponent } from './pages/manage-bike/manage-bike.component';
import {FormsModule} from '@angular/forms';
import { BorrowedBikeListComponent } from './pages/borrowed-bike-list/borrowed-bike-list.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReturnedBikesComponent } from './pages/returned-bikes/returned-bikes.component';
import { BikeDetailsComponent } from './pages/bike-details/bike-details.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    BikeListComponent,
    BikeCardComponent,
    MyBikesComponent,
    ManageBikeComponent,
    BorrowedBikeListComponent,
    RatingComponent,
    ReturnedBikesComponent,
    BikeDetailsComponent
  ],
  imports: [
    CommonModule,
    BikeRoutingModule,
    FormsModule
  ]
})
export class BikeModule { }
