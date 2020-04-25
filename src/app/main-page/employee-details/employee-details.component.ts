import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../../services/employee-data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  id:number=1;
  employee:Employee=null;
  error:string='';

  constructor(private employeeService:EmployeeDataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.employeeService.getEmployee(this.id).subscribe((data:Employee)=>
          this.employee=data);
        },error=>{
          this.error=error;
        });
  }
  onBack(){
    this.router.navigate(['employees']);
  }

}