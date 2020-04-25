import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../employee.model';
import { EmployeeDataService } from '../../services/employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @ViewChild('f',{static:true}) addEmpForm: NgForm;
  defaultLocation='Bangalore';
  id:number=1;
  newEmployee:Employee=null;

  constructor(private employeeService:EmployeeDataService,private router:Router) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data:Employee[])=> {
      this.id=data.length>0 ? Math.max(...data.map(h=>h.id))+1:1;
    })

  }

  onSubmit(){
    this.employeeService.getEmployees().subscribe((data:Employee[])=> {
      this.id=(<number>data.length)+1;
    })
    this.newEmployee=new Employee(this.id,this.addEmpForm.value.empname,this.addEmpForm.value.location,
    this.addEmpForm.value.email,this.addEmpForm.value.mobile);

    this.employeeService.addEmployee(this.newEmployee).subscribe((data:Employee)=>{
      this.router.navigate(['employees']);
    })

  }

  onReset(){
    this.addEmpForm.reset();
  }

  onCancel(){
    this.router.navigate(['employees']);
  }

}