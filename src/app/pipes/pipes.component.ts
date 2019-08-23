import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs/';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  title = "Hai welcome to  miraclesoftwaresystems";
  data = " ANGULAR TRAINING";
  slice = " haimynameisjyothsna";
  public student = {
    "name": "jyothsna",
    "id": "101",
    "age": " 23",
    "class": "9th class",
    "address": "chirala"
  }
  todaydate = new Date();
  myObservable: any;
  names=['jyothsna','lakshmi','prasanna','bujji','sowji','annapurna','Anu','Siri'];
  constructor() { }

  ngOnInit() {
    this.myObservable = of('this is async data').pipe(delay(5000));
    console.log(this.myObservable);
  }
  c
}
