import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-threashold',
  templateUrl: './threashold.component.html',
  styleUrls: ['./threashold.component.scss']
})
export class ThreasholdComponent implements OnInit {
  displayedColumns: string[] = [
    'ID',
    'Enabled',
  ];

  EmpData = [
    {
      ID: 1,
      Enabled: 'abbc',
      
    },
    {
      ID: 1,
      Enabled: 'abbc',
    
    },
  
    {
      ID: 1,
      Enabled: 'abbc',
     
    },
    {
      ID: 1,
      Enabled: 'abbc',
      
    },
    {
      ID: 1,
      Enabled: 'abbc',
     
    },

    {
      ID: 1,
      Enabled: 'abbc',
      
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
