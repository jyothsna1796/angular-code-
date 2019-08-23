import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { type } from 'os';
import { Employee } from './getemployee/model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JyoserviceService {

  constructor(private http: HttpClient) { }
   add() {
     return this.http.get('file:///C:/Users/jpujala/Downloads/addressAndContacts');
   }
   postMethod(employee: Employee): Observable<Employee> {
    //  if (employee.id === null) {
      return this.http.post<Employee>('http://dummy.restapiexample.com/api/v1/create', employee, {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      });
     }
   }

