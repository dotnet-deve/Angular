import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployees } from 'src/app/IEmployees';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employeeRecords:IEmployees={
    id:0,
    firstName:'',
    lastName:'',
    email:'',
    designation:'',
    experience:0,
    technicalSkills:''

  }
  constructor(private rs: EmployeesService, private router:Router){

  }

  addRecords(){
    this.rs.addNewEmployee(this.employeeRecords).subscribe(()=>{
      this.router.navigate(["/"]);
    })
  }
}
