import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployees } from 'src/app/IEmployees';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

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

  updateRecords(){
    this.rs.updateEmployee(this.employeeRecords).subscribe(()=>{
      this.routerRecords.navigate(["/home/employees"]);
    })
  }
}
