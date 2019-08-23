import { Component, OnInit } from '@angular/core';
import { Employee, Address } from './model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-getemployee',
  templateUrl: './getemployee.component.html',
  styleUrls: ['./getemployee.component.scss']
})
export class GetemployeeComponent implements OnInit {
  // employees: Employee[];
  constructor(private http: HttpClient) { }
  address: any [];
  address1: any[];
  ngOnInit() {
    this.http.get('./assets/addressAndContacts.json').subscribe((data: any[]) => {
      this.address = data ;
      this.address1 = this.address[0].addressAndContacts;
      console.log(this.address);
      console.log('-------------------');
      console.log(this.address1);
    },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
   // emp_name : String;
  // emp_salary :any;
  // emp_age: number;
  // emp_id: number;
  // employee = new Employee();
  // addEmployee(){
  //   this.jyo.postMethod(this.employee).subscribe(employee => {
  //     this.emp_id = employee.id;
  //     this.emp_name = employee.employee_name;
  //     this.emp_salary = employee.employee_salary;
  //     this.emp_age = employee.employee_age;
  //   });
  // }


