import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';
import { NgIf, JsonPipe } from '@angular/common';
import { PasswordValidator } from './PasswordValidator';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  empForm: FormGroup;
  locdata: boolean;
  submitted: true;
  showdata = false;
  adddata = false;
  data: any;
  password = '';
  confirmpassword = '';
  dateofbirth: Date;
  gender: string;
  branch1: any[];
  qualification: any[];
  locations: any[];
  selectedlocation: any[];
  slider: number;
  val1: any;
  placesuggestion: any[];
  selectedplace: string;
  tempaddress: string;
  phonenumber: number;
  emp: any[] = [];
  res: any[];
  filteredTools: any[];
  // adding rows
  details: any[];
  tableForm: any;
  b1: boolean;
  Array: FormArray;
  tools: string[] = ['MAAPS', 'INNOVATION', 'MARKETING', 'SALES', 'DATABASE', 'MIDDLEWARE', 'TESTING', 'B2B', 'DATACENTER'];
  tool: string;
  det: FormArray;
  constructor(private fb: FormBuilder) {
    this.branch1 = [
      { name: 'computerscience', code: 'cse' },
      { name: 'electrical', code: 'ece' },
      { name: 'mechanical', code: 'mech' },
      { name: 'civil', code: 'civil' },
    ];
    this.locations = [
      { name: 'MiracleCity' },
      { name: 'MiracleValley' },
      { name: 'MiracleHeights' },
      { name: 'MiracleHeadQuaters' },
    ];
  }
  filterTools(event) {
    this.filteredTools = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.tools.length; i++) {
      let tool = this.tools[i];
      if (tool.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredTools.push(tool);
      }
    }
  }

  ngOnInit() {
    this.empForm = this.fb.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+.com')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^([a-zA-Z0-9!@#$%^&*()?]{8,15})$')]),
      confirmpassword: new FormControl('', [Validators.required, PasswordValidator]),
      dateofbirth: new FormControl(),
      gender: new FormControl(),
      branch: new FormControl(),
      qualification: new FormControl(),
      salary: new FormControl('',[Validators.required]),
      slider: new FormControl(),
      val1: new FormControl(),
      formlocation: new FormControl(),
      selectedplace: new FormControl(),
      tempaddress: new FormControl(),
      checkfield: new FormControl(),
      peraddress: new FormControl(),
      location: this.fb.array([this.addLocationGroup()]),
      phonenumber: new FormControl(),
    }, { validator: PasswordValidator });
    
    this.tableForm = this.fb.group({
      empdetails: this.fb.array([]),
      // id: new FormControl(),
      // name: new FormControl(),
      // salary: new FormControl(),
      // age: new FormControl()
    });
  }

  add() {
    this.showdata = true;
    // let result = JSON.stringify(this.empForm.value);
    //document.write(result);
    console.log(this.empForm.value);

  }
  reset() {
    this.empForm.reset();
  }

  addToTable() {
    //const res = JSON.stringify(this.empForm.value);
    console.log(this.empForm.get('formlocation'));
    this.emp.push(this.empForm.value);
  }
  getSelectedLoc() {
    this.selectedlocation = this.empForm.controls.formlocation.value;
  }
  addcheck() {
    this.adddata = true;
    this.empForm.controls.peraddress.setValue(this.empForm.controls.tempaddress.value);
  }
  addLocationGroup() {
    return this.fb.group({
      Street: [],
      City: [],
      Zipcode: []
    });
  }
  get locationArray() {
    return <FormArray>this.empForm.get("location");
  }
  addLocation() {
    this.locationArray.push(this.addLocationGroup());
  }
  removeLocation(index) {
    this.locationArray.removeAt(index);
  }
  submit1() {
    return console.log(this.empForm.value);
  }
  add1() {
    this.data = true;
  }
  addRow() {
    console.log('Method Call');
    this.empFormArray.push(this.fb.group({
      id: '',
      name: '',
      salary: '',
      age: '',
    }));
    console.log('Row Added');
  }
  deleteRow(i: number) {
    // this.det = this.tableForm.controls.empdetails as FormArray;
    console.log('in delete mrthod', this.empFormArray);
    this.empFormArray.removeAt(i);
  }

  get empFormArray() { return this.tableForm.get('empdetails') as FormArray; }
}
