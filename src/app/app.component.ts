import { Component } from '@angular/core';

import { EmployeeDataService } from './services/employee-data.service'
import { Employee } from './employee.model';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // employees:Employee[]=[];

  constructor(
    // private employeeService:EmployeeDataService
  ){}

  // ngOnInit(){
  //   this.employeeService.getEmployees().subscribe(
  //     (data:Employee[])=>{
  //     console.log(data);
  //     this.employees=data;
  //     console.log(this.employees[1].name);
  //   })
  // }
}
