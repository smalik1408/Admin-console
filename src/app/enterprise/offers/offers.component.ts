import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  Description: string;
  CouponID: number;
  EnterpriseID: number;
  CouponTitle: string;
  
}

const ELEMENT_DATA: Element[] = [
  {CouponID: 1, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 2, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 3, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 4, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 5, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 6, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 7, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 8, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 9, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 10, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 11, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 12, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 13, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 14, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 15, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 16, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 17, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 18, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 19, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},
  {CouponID: 20, EnterpriseID: 2, CouponTitle: 'sdd', Description: 'Ca'},

];


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
 
  displayedColumns = ['CouponID', 'EnterpriseID', 'CouponTitle', 'Description','edit','delete'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSourceWithPageSize = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild('paginator')
      paginator!: MatPaginator;
  @ViewChild('paginatorPageSize')
  paginatorPageSize!: MatPaginator;

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); 
  //   filterValue = filterValue.toLowerCase(); 
  //   this.dataSource.filter = filterValue;
  // }

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }

   ngOnInit(): void {

   }
 

//   empdetails: MatTableDataSource<any> = new MatTableDataSource<any>();

//   displayedColumns: string[] = [
//     'CouponID',
//     'EnterpriseID',
//     'CouponTitle',
//     'Description',
//        'edit',
//        'delete'
//   ];

  
 
  

//   EmpData = [
//     {
//       CouponID: 1,
//       EnterpriseID: 'abbc',
//       CouponTitle: 'ssss',
//       Description: 'uiuihdius',

//     },
//     {
//       CouponID: 1,
//       EnterpriseID: 'abbc',
//       CouponTitle: 'ssss',
//       Description: 'uiuihdius',
     

//     },
// {
//       CouponID: 1,
//       EnterpriseID: 'abbc',
//       CouponTitle: 'ssss',
//       Description: 'uiuihdius',
      

//     },
//     {
//       CouponID: 1,
//       EnterpriseID: 'abbc',
//       CouponTitle: 'ssss',
//       Description: 'uiuihdius',
      

//     },
//     {
//       CouponID: 1,
//       EnterpriseID: 'abbc',
//       CouponTitle: 'ssss',
//       Description: 'uiuihdius',
      

//     },
//     {
//       CouponID: 1,
//       EnterpriseID: 'abbc',
//       CouponTitle: 'ssss',
//       Description: 'uiuihdius',
      

//     },
//     {
//       CouponID: 1,
//       EnterpriseID: 'abbc',
//       CouponTitle: 'ssss',
//       Description: 'uiuihdius',
      

//     },
//     {
//       CouponID: 1,
//       EnterpriseID: 'abbc',
//       CouponTitle: 'ssss',
//       Description: 'uiuihdius',
      

//     },
//     {
//       CouponID: 1,
//       EnterpriseID: 'abbc',
//       CouponTitle: 'ssss',
//       Description: 'uiuihdius',
      

//     }
//   ];

//   dataSource = new MatTableDataSource(this.EmpData);
//   dataSourceWithPageSize = new MatTableDataSource(this.EmpData);

  

//   constructor() {
//     this.empdetails = new MatTableDataSource<any>(this.EmpData);

//    }

//    @ViewChild('paginator')
//    paginator!: MatPaginator;
//    @ViewChild('paginatorPageSize')
//    paginatorPageSize!: MatPaginator;
 
//    pageSizes = [5, 10, 15];

//    ngAfterViewInit() {
//      this.dataSource.paginator = this.paginator;
//      this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  
//   }
 
  
//   ngOnInit(): void {

//   }



 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 

}
