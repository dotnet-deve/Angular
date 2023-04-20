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
  employeeRecords:any={
    firstName:'',
    lastName:'',
    gender:'',
    email:'',
    address1:'',
    address2:'',
    phoneNumber:'',
    telePhoneNumber:'',
    skills:'',
    experience:'',
    grade:'',
    designation:'',
    hobbies:''

  }
  constructor(private rs: EmployeesService, private router:Router){

  }

  addRecords(){
    this.rs.addNewEmployee(this.employeeRecords).subscribe(()=>{
    this.router.navigate(['/home/employees']);
    })
  }
}
