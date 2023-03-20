import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-enterprise-patron',
  templateUrl: './enterprise-patron.component.html',
  styleUrls: ['./enterprise-patron.component.scss']
})
export class EnterprisePatronComponent implements OnInit {
  displayedColumns: string[] = [
    'EnterpriseId',
    'PatronId',
    'JoinedOn',
    'isLoyaltyEnabled',
    'EnableOutgoing',
    'TotalVisitCount',
    'VisitCountRedeemed',
    'TotalPoointsForDollarSpent',
    'PointsRedeemed',
    'FirstName',
    'LastName',
    'OptOutDate',
     'Birthday',
     'IsBanned',
     'Email',
     'OffrzUrl',
  ];

  EmpData = [
    {
      EnterpriseId:1,
      PatronId:1,
      JoinedOn:1,
      isLoyaltyEnabled:true,
      EnableOutgoing:1,
      TotalVisitCount:34,
      VisitCountRedeemed:5,
      TotalPoointsForDollarSpent:6,
      PointsRedeemed:67,
      FirstName:1,
      LastName:2,
      OptOutDate:3,
      Birthday:31,
      IsBanned:1,
      Email:1,
      OffrzUrl:1,
    },
    {
      ID: 1,
      Description: 'abbc',
      Title: 'ssss',
      Createdon: 'uiuihdius',
      Expireson: 'gyusgaduy',
    },
  
    {
      ID: 1,
      Description: 'abbc',
      Title: 'ssss',
      Createdon: 'uiuihdius',
      Expireson: 'gyusgaduy',
    },
    {
      ID: 1,
      Description: 'abbc',
      Title: 'ssss',
      Createdon: 'uiuihdius',
      Expireson: 'gyusgaduy',
    },
    {
      ID: 1,
      Description: 'abbc',
      Title: 'ssss',
      Createdon: 'uiuihdius',
      Expireson: 'gyusgaduy',
    },

    {
      ID: 1,
      Description: 'abbc',
      Title: 'ssss',
      Createdon: 'uiuihdius',
      Expireson: 'gyusgaduy',
    },

  ];

  dataSource = new MatTableDataSource(this.EmpData);
  dataSourceWithPageSize = new MatTableDataSource(this.EmpData);

  constructor() { }

  @ViewChild('paginator')
  paginator!: MatPaginator;
  @ViewChild('paginatorPageSize')
  paginatorPageSize!: MatPaginator;

  pageSizes = [5, 10, 15];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }

  ngOnInit(): void {
  }

}
