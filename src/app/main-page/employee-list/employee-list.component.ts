import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../../services/employee-data.service';
import {Employee} from '../../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private empList:Employee[] =[];

  constructor(private employeeService:EmployeeDataService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data:Employee[])=> {
      this.empList=data;
    })
  }
  

}