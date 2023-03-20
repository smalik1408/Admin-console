import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.scss'],
})
export class PageheaderComponent implements OnInit {
  name = '!!!';
  viewMode = 'tab1';

  constructor() {}
  @Input() icon?: string;
  ngOnInit(): void {}

}
