import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseComponent } from './enterprise.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { UpdateEnterpriseComponent } from './update-enterprise/update-enterprise.component';
import { EmailCampaignComponent } from './email-campaign/email-campaign.component';
import { OffersComponent } from './offers/offers.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ThreasholdComponent } from './threashold/threashold.component';
import { EnterprisePatronComponent } from './enterprise-patron/enterprise-patron.component';
import { WifiActivityComponent } from './wifi-activity/wifi-activity.component';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriseRoutingModule } from './enterprise-routing.module';



import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    EnterpriseComponent,
    AddLocationComponent,
    UpdateEnterpriseComponent,
    EmailCampaignComponent,
    OffersComponent,
    RewardsComponent,
    ThreasholdComponent,
    EnterprisePatronComponent,
    WifiActivityComponent,
  
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    EnterpriseRoutingModule,
    MatTableModule,
    MatInputModule, 
    MatSelectModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  exports:[
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
  
  ]
})
export class EnterpriseModule { }
