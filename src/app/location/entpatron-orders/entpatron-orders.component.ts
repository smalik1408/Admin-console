import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-entpatron-orders',
  templateUrl: './entpatron-orders.component.html',
  styleUrls: ['./entpatron-orders.component.scss']
})
export class EntpatronOrdersComponent implements OnInit {

  displayedColumns: string[] = [
    'JoinedOn',
    'FirstName',
    'LastName',
    'Email',
    'GratuityAmount',
    'SubTotal',
    'TaxAmount',
    'AmountDue',
    'ClosedOn',
    'CreatedBy',
    'DateAssociated',
    
  ];

  EmpData = [
    {
      JoinedOn: 1,
      FirstName: 'abbc',
      LastName: 'ssss',
      Email: 'uiuihdius',
      GratuityAmount: 1,
      SubTotal: 'abbc',
      TaxAmount: 'ssss',
      AmountDue: 'uiuihdius',
      ClosedOn: 'gyusgaduy',
      CreatedBy: 'gyusgaduy',
      DateAssociated: 'gyusgaduy',
      
    },
    {
      JoinedOn: 1,
      FirstName: 'abbc',
      LastName: 'ssss',
      Email: 'uiuihdius',
      GratuityAmount: 1,
      SubTotal: 'abbc',
      TaxAmount: 'ssss',
      AmountDue: 'uiuihdius',
      ClosedOn: 'gyusgaduy',
      CreatedBy: 'gyusgaduy',
      DateAssociated: 'gyusgaduy',
    },
  
    {
      JoinedOn: 1,
      FirstName: 'abbc',
      LastName: 'ssss',
      Email: 'uiuihdius',
      GratuityAmount: 1,
      SubTotal: 'abbc',
      TaxAmount: 'ssss',
      AmountDue: 'uiuihdius',
      ClosedOn: 'gyusgaduy',
      CreatedBy: 'gyusgaduy',
      DateAssociated: 'gyusgaduy',
    },
    {
      JoinedOn: 1,
      FirstName: 'abbc',
      LastName: 'ssss',
      Email: 'uiuihdius',
      GratuityAmount: 1,
      SubTotal: 'abbc',
      TaxAmount: 'ssss',
      AmountDue: 'uiuihdius',
      ClosedOn: 'gyusgaduy',
      CreatedBy: 'gyusgaduy',
      DateAssociated: 'gyusgaduy',
      
    },
    {
      JoinedOn: 1,
      FirstName: 'abbc',
      LastName: 'ssss',
      Email: 'uiuihdius',
      GratuityAmount: 1,
      SubTotal: 'abbc',
      TaxAmount: 'ssss',
      AmountDue: 'uiuihdius',
      ClosedOn: 'gyusgaduy',
      CreatedBy: 'gyusgaduy',
      DateAssociated: 'gyusgaduy',
    },

    {
      JoinedOn: 1,
      FirstName: 'abbc',
      LastName: 'ssss',
      Email: 'uiuihdius',
      GratuityAmount: 1,
      SubTotal: 'abbc',
      TaxAmount: 'ssss',
      AmountDue: 'uiuihdius',
      ClosedOn: 'gyusgaduy',
      CreatedBy: 'gyusgaduy',
      DateAssociated: 'gyusgaduy',
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
