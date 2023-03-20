import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'adminconsole';
  sidenavclosed: boolean = false;
  pageheader = false;

  sideNavStatus:boolean=false;

  isSideNavCollapsed = true;
  screenWidth = 0;
  isHeader = false;


  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/signin') {
          this.sidenavclosed = false;
          this.pageheader = false;
        } else if (val.url == '/') {
          this.sidenavclosed = true;
          this.pageheader = true;
        } else {
          this.sidenavclosed = true;
          this.pageheader = true;
        }
      }
    });
  }


  getBodyClass(): string {
    let styleClass = '';

    if (this.isSideNavCollapsed && this.screenWidth > 786) {
      styleClass = 'body-trimmed';
    } else if (
      this.isSideNavCollapsed &&
      this.screenWidth <= 786 &&
      this.screenWidth > 0
    ) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }


}
