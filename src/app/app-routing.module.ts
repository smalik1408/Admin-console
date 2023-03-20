import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { LocationComponent } from './location/location.component';
import { PageheaderComponent } from './nav-items/pageheader/pageheader.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'enterprise',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'enterprise',
    loadChildren: () => import('./enterprise/enterprise.module')
      .then(mod => mod.EnterpriseModule),
    data: { title: 'Enterprise' }
  },

  {
    path: 'location',
    loadChildren: () => import('./location/location.module')
      .then(mod => mod.LocationModule),
    data: { title: 'Location' }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
