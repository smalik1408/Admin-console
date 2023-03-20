import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = [
    'GratuityAmount',
    'SubTotal',
    'TaxAmount',
    'AmountDue',
    'ClosedOn',
    'CreatedOn',
  ];

  EmpData = [
    {
      GratuityAmount:1,
      SubTotal: 'abbc',
      TaxAmount: 'ssss',
      AmountDue: 'uiuihdius',
      ClosedOn: 'gyusgaduy',
      CreatedOn: 'gyusgaduy',

    },
    {
      GratuityAmount: 1,
      SubTotal: 'abbc',
      TaxAmount: 'ssss',
      AmountDue: 'uiuihdius',
      ClosedOn: 'gyusgaduy',
      CreatedOn: 'gyusgaduy',
    },
  
    {
      ID: 1,
      Description: 'abbc',
      Title: 'ssss',
      Createdon: 'uiuihdius',
      Expireson: 'gyusgaduy',
    },
    {
      GratuityAmount: 1,
      SubTotal: 'abbc',
      TaxAmount: 'ssss',
      AmountDue: 'uiuihdius',
      ClosedOn: 'gyusgaduy',
      CreatedOn: 'gyusgaduy',
    },
    {
      GratuityAmount: 1,
      SubTotal: 'abbc',
      TaxAmount: 'ssss',
      AmountDue: 'uiuihdius',
      ClosedOn: 'gyusgaduy',
      CreatedOn: 'gyusgaduy',
    },

    {
      GratuityAmount: 1,
      SubTotal: 'abbc',
      TaxAmount: 'ssss',
      AmountDue: 'uiuihdius',
      ClosedOn: 'gyusgaduy',
      CreatedOn: 'gyusgaduy',
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



  ngOnInit(): void {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
