import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss'],
})
export class RewardsComponent implements OnInit {
  displayedColumns: string[] = [
    'ID',
    'Description',
    'Title',
    'Createdon',
    'Expireson',
  ];

  EmpData = [
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

  constructor() {}

  @ViewChild('paginator')
  paginator!: MatPaginator;
  @ViewChild('paginatorPageSize')
  paginatorPageSize!: MatPaginator;

  pageSizes = [5, 10, 15];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 

}
