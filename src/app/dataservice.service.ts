import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
private messageSource = new BehaviorSubject("default messsage from dataservice file");
CurrentMesage = this.messageSource.asObservable();
  constructor() { }
  changeMessage( message: string){
this.messageSource.next(message);
  }
}
