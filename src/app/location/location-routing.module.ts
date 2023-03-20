import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationConfigComponentComponent } from '../location-config-component/location-config-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { EntpatronOrdersComponent } from './entpatron-orders/entpatron-orders.component';
import { LocationComponent } from './location.component';
import { LocationsComponent } from './locations/locations.component';
import { OrdersComponent } from './orders/orders.component';
import { PlumwifiHeartBeatComponent } from './plumwifi-heart-beat/plumwifi-heart-beat.component';
import { PlumwifiHeartBeatsByLocIdComponent } from './plumwifi-heart-beats-by-loc-id/plumwifi-heart-beats-by-loc-id.component';
import { UpdateLocationComponent } from './update-location/update-location.component';


const routes: Routes = [
  {
    path: '',
    component: LocationComponent,
  },
  {
    path: 'entpatron',
    component: EntpatronOrdersComponent,
    data: { title: 'entpatron-orders' },
  },

  {
    path: 'locations',
    component: LocationsComponent,
    data: { title: 'locations' },
  },

  {
    path: 'order',
    component: OrdersComponent,
    data: { title: 'order' },
  },

  {
    path: 'update-location',
    component: UpdateLocationComponent,
    data: { title: 'update-location' },
  },

  {
    path: 'locations/edit',
    component: EditComponentComponent,
    data: { title: 'edit' },
  },

  {
    path: 'plumwifi-heart-beat',
    component: PlumwifiHeartBeatComponent,
    data: { title: 'plumwifi-heart-beat' },
  },
  {
    path: 'plumwifi-heart-beats-by-loc-id',
    component: PlumwifiHeartBeatsByLocIdComponent,
    data: { title: 'plumwifi-heart-beats-by-loc-id' },
  },

  {
    path: 'locationconfig',
    component:LocationConfigComponentComponent,
    data: { title: 'locationconfig' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
