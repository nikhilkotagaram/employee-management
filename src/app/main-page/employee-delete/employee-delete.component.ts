import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { EmployeeDataService } from '../../services/employee-data.service';
import { Employee } from '../../employee.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  id:number=1;
  error:string='';

  constructor(private employeeService:EmployeeDataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() { 
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
            this.conditionCheck();
        });
  }

  deleteEmp(){
    this.employeeService.deleteEmployee(this.id).subscribe();
  }
  conditionCheck(){
    this.employeeService.getEmployee(this.id).subscribe((data)=>{
      this.deleteEmp();
  },error=>{
    this.error=error;
  })
  }
  onBack(){
    this.router.navigate(['employees']);
  }

}