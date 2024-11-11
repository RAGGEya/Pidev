import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {BikeListComponent} from './pages/bike-list/bike-list.component';
import {MyBikesComponent} from './pages/my-bikes/my-bikes.component';
import {ManageBikeComponent} from './pages/manage-bike/manage-bike.component';
import {BorrowedBikeListComponent} from './pages/borrowed-bike-list/borrowed-bike-list.component';
import {ReturnedBikesComponent} from './pages/returned-bikes/returned-bikes.component';
import {authGuard} from '../../services/guard/auth.guard';
import {BikeDetailsComponent} from './pages/bike-details/bike-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: BikeListComponent,
        canActivate: [authGuard]
      },
      {
        path: 'my-bikes',
        component: MyBikesComponent,
        canActivate: [authGuard]
      },
      {
        path: 'my-borrowed-bikes',
        component: BorrowedBikeListComponent,
        canActivate: [authGuard]
      },
      {
        path: 'my-returned-bikes',
        component: ReturnedBikesComponent,
        canActivate: [authGuard]
      },
      {
        path: 'details/:bikeId',
        component: BikeDetailsComponent,
        canActivate: [authGuard]
      },
      {
        path: 'manage',
        component: ManageBikeComponent,
        canActivate: [authGuard]
      },
      {
        path: 'manage/:bikeId',
        component: ManageBikeComponent,
        canActivate: [authGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikeRoutingModule {
}
