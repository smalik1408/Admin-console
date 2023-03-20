import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plumwifi-heart-beat',
  templateUrl: './plumwifi-heart-beat.component.html',
  styleUrls: ['./plumwifi-heart-beat.component.scss']
})
export class PlumwifiHeartBeatComponent implements OnInit {

  currentCustomer = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
