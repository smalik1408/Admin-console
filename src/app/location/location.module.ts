import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationsComponent } from './locations/locations.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { OrdersComponent } from './orders/orders.component';
import { EntpatronOrdersComponent } from './entpatron-orders/entpatron-orders.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { PlumwifiHeartBeatComponent } from './plumwifi-heart-beat/plumwifi-heart-beat.component';
import { PlumwifiHeartBeatsByLocIdComponent } from './plumwifi-heart-beats-by-loc-id/plumwifi-heart-beats-by-loc-id.component';




@NgModule({
  declarations: [
    LocationsComponent,
    UpdateLocationComponent,
    OrdersComponent,
    EntpatronOrdersComponent,
    EditComponentComponent,
    PlumwifiHeartBeatComponent,
    PlumwifiHeartBeatsByLocIdComponent,
   
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule 


  ]
})
export class LocationModule { }
