import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  ngOnInit(): void {}
  isSideNavActive = false;

  @Input() sideNavStatus: boolean = false;

  toggleSideNav() {
    this.isSideNavActive = !this.isSideNavActive;
  }

  list = [
    {
      number: '1',
      name: 'raj kumar',
      icon: 'fa-solid fa-box',
    },
    {
      number: '1',
      name: 'raj kumar',
      icon: 'fa-solid fa-box',
    },
    {
      number: '1',
      name: 'raj kumar',
      icon: 'fa-solid fa-box',
    },
    {
      number: '1',
      name: 'raj kumar',
      icon: 'fa-solid fa-box',
    },
    {
      number: '1',
      name: 'raj kumar',
      icon: 'fa-solid fa-box',
    },
  ];
}
