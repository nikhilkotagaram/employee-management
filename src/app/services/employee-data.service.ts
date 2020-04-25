import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import {Employee} from '../employee.model';
import { Observable, throwError } from 'rxjs';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private url : string="/api/employees";

  httpOptions= { headers:
    new HttpHeaders({'Content-type':'application/json'})
  };

  constructor(private http:HttpClient) { }

  public getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }
  public getEmployee(id : number): Observable<Employee>{
    return this.http.get<Employee>(`${this.url}/${id}`)
                .pipe(catchError(this.handleError)); 
  }
  public addEmployee(employee : Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.url}`, employee, this.httpOptions);
  }
  public updateEmployee(employee : Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.url}`, employee, this.httpOptions);
  }
  public deleteEmployee(id : number){
    return this.http.delete(`${this.url}/${id}`); 
  }
  private handleError(errorResponse:HttpErrorResponse){
    // if(errorResponse.error instanceof(ErrorEvent)){
    //   console.error('Client Side Error',errorResponse.error.message);
    // } else{
    //   console.error('Server side error', errorResponse);
    // }
    return throwError('Employee record does not exist');
  }


}