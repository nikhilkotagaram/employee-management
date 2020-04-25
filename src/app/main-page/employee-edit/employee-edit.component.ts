import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../../employee.model';
import { EmployeeDataService } from '../../services/employee-data.service';
import { Router,Params,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  @ViewChild('f',{static:true}) addEmpForm: NgForm;
  employee:Employee=null;
  error:string='';

  id:number=0;

  constructor(private router:Router,private route:ActivatedRoute,
              private employeeService: EmployeeDataService) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.initForm();
        });
  }

  onSubmit(){
    this.employee=new Employee(this.id,this.addEmpForm.value.empname,this.addEmpForm.value.location,
    this.addEmpForm.value.email,this.addEmpForm.value.mobile);
    this.employeeService.updateEmployee(this.employee).subscribe((data:Employee)=>{
      this.router.navigate(['employees']);
    })
  }


  onReset(){
    this.addEmpForm.reset();
  }

  onCancel(){
    this.router.navigate(['employees']);
  }

  initForm(){
    this.employeeService.getEmployee(this.id).subscribe((data:Employee)=>{
        this.employee=data;
    },error=>{
    this.error=error;
  })  
  }

}