import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-wifi-activity',
  templateUrl: './wifi-activity.component.html',
  styleUrls: ['./wifi-activity.component.scss']
})
export class WifiActivityComponent implements OnInit {
  displayedColumns: string[] = [
    'MacAddress',
    'IpAddress',
    'Activity_Code',
    'Activity_Desc',
    'Activity_Date',
  ];

  EmpData = [
    {
      MacAddress: 1,
      IpAddress: 'abbc',
      Activity_Code: 'ssss',
      Activity_Desc: 'uiuihdius',
      Activity_Date: 'gyusgaduy',
    },
    {
      MacAddress: 1,
      IpAddress: 'abbc',
      Activity_Code: 'ssss',
      Activity_Desc: 'uiuihdius',
      Activity_Date: 'gyusgaduy',
    },
  
    {
      MacAddress: 1,
      IpAddress: 'abbc',
      Activity_Code: 'ssss',
      Activity_Desc: 'uiuihdius',
      Activity_Date: 'gyusgaduy',
    },
    {
      MacAddress: 1,
      IpAddress: 'abbc',
      Activity_Code: 'ssss',
      Activity_Desc: 'uiuihdius',
      Activity_Date: 'gyusgaduy',
    },
    {
      MacAddress: 1,
      IpAddress: 'abbc',
      Activity_Code: 'ssss',
      Activity_Desc: 'uiuihdius',
      Activity_Date: 'gyusgaduy',
    },

    {
      MacAddress: 1,
      IpAddress: 'abbc',
      Activity_Code: 'ssss',
      Activity_Desc: 'uiuihdius',
      Activity_Date: 'gyusgaduy',
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
