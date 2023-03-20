import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLocationComponent } from './add-location/add-location.component';
import { EmailCampaignComponent } from './email-campaign/email-campaign.component';
import { EnterprisePatronComponent } from './enterprise-patron/enterprise-patron.component';
import { EnterpriseComponent } from './enterprise.component';
import { OffersComponent } from './offers/offers.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ThreasholdComponent } from './threashold/threashold.component';
import { UpdateEnterpriseComponent } from './update-enterprise/update-enterprise.component';
import { WifiActivityComponent } from './wifi-activity/wifi-activity.component';

const routes: Routes = [
  {
    path: '',
    component: EnterpriseComponent,
  },

  {
    path: 'update-enterprise',
    component: UpdateEnterpriseComponent,
    data:{title:'Update-Enterprise'}
  },

  {
    path: 'email-campaign',
    component: EmailCampaignComponent,
    data:{title:'Email-Campaign'}
  },

  {
    path: 'offer',
    component: OffersComponent,
    data:{title:'Offer'}
  },

  {
    path: 'rewards',
    component: RewardsComponent,
    data:{title:'Rewards'}
  },

  {
    path: 'threshold',
    component: ThreasholdComponent,
    data:{title:'Threshold'}
  },

  {
    path: 'enterprise-patron',
    component: EnterprisePatronComponent,
    data:{title:'Enterprise-Patron'}
  },

  {
    path: 'wifi-activity',
    component: WifiActivityComponent,
    data:{title:'Wifi-Activity'}
  },
  {
    path: 'add-location',
    component: AddLocationComponent,
    data:{title:'Add-Location'}
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterpriseRoutingModule {}
