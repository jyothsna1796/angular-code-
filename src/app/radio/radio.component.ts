import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';
import { element } from 'protractor';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  radio: any;
  v1: any;
  final: any[];
  model: any;
  constructor(private crud: CrudserviceService) { }

  ngOnInit() {

    console.log('jyothsna');
    this.v1 = this.crud.getEmp().subscribe((data: any[]) => {
      console.log('-------', data);
      return data;

    });

    console.log('hgtrewq', this.v1);
    console.log('final ---', this.final);
    this.radio = [
      { id: '1', name: 'jyothsna', value: true, disable: false },
      { id: '2', name: 'lakshmi', value: true, disable: false },
      { id: '3', name: 'bujji', value: true, disable: false },
      { id: '4', name: 'prasanna', value: false, disable: false },
      { id: '5', name: 'sowji', value: false, disable: true },
      { id: '6', name: 'sowji2', value: false, disable: false }
    ];
  }
  finalData(f) {
    console.log('template form', f);
  }
  addCheck(val, index) {
    console.log('value', val)
    this.radio[index].value = val;
    if (this.radio[0].value === false && this.radio[1].value === false) {
      this.radio.forEach((element, i) => {
        if (i > 1) {
          element.value = false;
          element.disable = true;
        }
      });
    } else {
      this.radio.forEach((element, i) => {
      element.disable = false;
      });
    }
    console.log('form array', this.radio);
  }
  onSubmit() {
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
