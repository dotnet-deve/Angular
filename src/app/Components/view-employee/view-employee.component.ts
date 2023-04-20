import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployees } from 'src/app/IEmployees';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employeeRecords:IEmployees={
    id:0,
    firstName:'',
    lastName:'',
    email:'',
    designation:'',
    experience:0,
    technicalSkills:''

  }
  constructor(private rs: EmployeesService, private router: ActivatedRoute, private routerRecords:Router){

  }
  ngOnInit(): void {
    this.router.paramMap.subscribe((params)=>{
      let id = Number(params.get('id'))
      this.getId(id);
    });
  }

  getId(id: number){
    this.rs.getById(id).subscribe((data)=>{
      this.employeeRecords=data;
    });
  }
}
