import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagehederserviceService {

  SubjectBehaviour=new Subject<boolean>();
  constructor() { }
}
