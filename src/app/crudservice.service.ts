import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee1, Employee2 } from './crud/format';
@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  //url: 'http://dummy.restapiexample.com/api/v1/';
  constructor(private http: HttpClient) { }
 getEmp() {
   console.log("hello welcome");
  return this.http.get('http://dummy.restapiexample.com/api/v1/employees' );
 }
 addEmployee(user: Employee2 ) {
  return this.http.post('http://dummy.restapiexample.com/api/v1/create', user);
  }
  deleteEmp(id: number) {
    return this.http.delete('http://dummy.restapiexample.com/api/v1/' + 'delete' + '/' + id);
    }
}
