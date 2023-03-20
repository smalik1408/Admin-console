import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-plumwifi-heart-beats-by-loc-id',
  templateUrl: './plumwifi-heart-beats-by-loc-id.component.html',
  styleUrls: ['./plumwifi-heart-beats-by-loc-id.component.scss']
})
export class PlumwifiHeartBeatsByLocIdComponent implements OnInit {

  displayedColumns: string[] = [
    'ConfigVersion',
    'LastOnline',
    'HeartBeatAt',
    'HeartBeats',
    
  ];

  EmpData = [
    {
      ConfigVersion: 1,
      LastOnline: 'abbc',
      HeartBeatAt: 'ssss',
      HeartBeats: 'uiuihdius',
      
    },
    {
      ConfigVersion: 1,
      LastOnline: 'abbc',
      HeartBeatAt: 'ssss',
      HeartBeats: 'uiuihdius',
    },
  
    {
      ConfigVersion: 1,
      LastOnline: 'abbc',
      HeartBeatAt: 'ssss',
      HeartBeats: 'uiuihdius',
    },
    {
      ConfigVersion: 1,
      LastOnline: 'abbc',
      HeartBeatAt: 'ssss',
      HeartBeats: 'uiuihdius',
    },
    {
      ConfigVersion: 1,
      LastOnline: 'abbc',
      HeartBeatAt: 'ssss',
      HeartBeats: 'uiuihdius',
    },

    {
      ConfigVersion: 1,
      LastOnline: 'abbc',
      HeartBeatAt: 'ssss',
      HeartBeats: 'uiuihdius',
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
