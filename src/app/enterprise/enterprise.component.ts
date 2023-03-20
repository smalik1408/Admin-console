import { Component, OnInit } from '@angular/core';
import { PagehederserviceService } from 'src/services/pagehederservice.service';

export interface EnterpriseLinks {
  link: string;
  id: number;
  routeall: string;
}
@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
})
export class EnterpriseComponent implements OnInit {
  SubjectBehaviour: boolean = false;

  constructor(private _PagehederserviceService: PagehederserviceService) {

    this._PagehederserviceService.SubjectBehaviour.subscribe((res) => {
      this.SubjectBehaviour = res;
    });

  }
  enterprise: EnterpriseLinks[] = [
    {
      link: 'Enterprise',
      id: 1263,
      routeall: '/enterprise',
    },

    {
      link: 'Add Location',
      id: 1263,
      routeall: 'add-location',
    },

    {
      link: 'Update Enterprise',
      id: 1263,
      routeall: '/enterprise/update-enterprise',
    },

    {
      link: 'Email Campaigns',
      id: 1263,
      routeall: '/enterprise/email-campaign',
    },

    {
      link: 'Offers',
      id: 1263,
      routeall: '/enterprise/offer',
    },

    {
      link: 'Rewards',
      id: 1263,
      routeall: '/enterprise/rewards',
    },

    {
      link: 'Threshold',
      id: 1263,
      routeall: '/enterprise/threshold',
    },

    {
      link: 'Enterprise Patron',
      id: 1263,
      routeall: '/enterprise/enterprise-patron',
    },

    {
      link: 'Wifi Activity',
      id: 1263,
      routeall: '/enterprise/wifi-activity',
    },
  ];

  ngOnInit(): void {
    this._PagehederserviceService.SubjectBehaviour.next(true);
  }

  onClick(ent: any) {
    alert(ent.link);
  }
}
