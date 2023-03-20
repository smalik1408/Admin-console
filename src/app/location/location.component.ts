import { Component, OnInit } from '@angular/core';
import { EnterpriseLinks } from '../enterprise/enterprise.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  enterprise: EnterpriseLinks[] = [
    {
      link: 'locations',
      id: 1263,
      routeall:'locations'
    },
    {
      link: 'update',
      id: 1263,
      routeall:'update-location'
    },
    {
      link: 'orders',
      id: 1263,
      routeall:'order'
    },
    {
      link: 'EnterprisePatron Order',
      id: 1263,
      routeall:'entpatron'
    },
    {
      link: 'Location Config',
      id: 1263,
      routeall:'locationconfig'
    },

    {
      link: 'plumwifi-heart-beat',
      id: 1263,
      routeall:'plumwifi-heart-beat'
    },

    {
      link: 'plumwifi-heart-beats-by-loc-id',
      id: 1263,
      routeall:'plumwifi-heart-beats-by-loc-id'
    },

   
  ];
  onClick(ent: any) {
    alert(ent.link);
  }
}
