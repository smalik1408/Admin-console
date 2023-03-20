import { Component, OnInit } from '@angular/core';
import { PagehederserviceService } from 'src/services/pagehederservice.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  SubjectBehaviour: boolean = false;

  constructor(private _PagehederserviceService:PagehederserviceService) {
    this._PagehederserviceService.SubjectBehaviour.subscribe((res)=>{
      this.SubjectBehaviour=res;
    })
  
  }

  ngOnInit(): void {
    this._PagehederserviceService.SubjectBehaviour.next(true)
  }

}
