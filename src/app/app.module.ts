import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './nav-items/header/header.component';
import { SideNavComponent } from './nav-items/side-nav/side-nav.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PageheaderComponent } from './nav-items/pageheader/pageheader.component';
import { LocationComponent } from './location/location.component';
import {FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { LocationConfigComponentComponent } from './location-config-component/location-config-component.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    SigninComponent,
    PageheaderComponent,
    LocationComponent,
    EditComponentComponent,
    LocationConfigComponentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTabsModule,
    BrowserAnimationsModule
   
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
