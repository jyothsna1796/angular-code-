import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from 'src/app/crudservice.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Employee2 } from '../format';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {
  empForm: FormGroup;

  constructor(private fb: FormBuilder, private crud1: CrudserviceService, private router: Router) {}
  ngOnInit() {
    this.empForm = this.fb.group({
      name: ['', Validators.required],
      salary: [''],
      age: ['']
      });
  }
  addEmp(user: Employee2) {
    this.crud1.addEmployee(this.empForm.value)
    .subscribe(data => {
      console.log("hello");
      console.log(data);
      console.log("data added succesfully");
       // this.router.navigate(['/crud']);
      });
  }
}
