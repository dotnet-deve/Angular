import { Component, ViewChild } from '@angular/core';
import { DeleteEmployeeComponent } from '../Components/delete-employee/delete-employee.component';
import { IEmployees } from '../IEmployees';
import { EmployeesService } from '../Services/employees.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  public allEmployees = new MatTableDataSource<IEmployees>([]);
  displayedColumns: string[] = ['firstName', 'lastName','email','designation','experience','technicalSkills','action'];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor( private employees:EmployeesService,public dialog: MatDialog){

  }
  
  ngOnInit(){
    
    this.getAllEmployeesData();
    
    
  }
  ngAfterViewInit() {
    this.allEmployees.paginator =this.paginator;
}
  getAllEmployeesData(){
     this.employees.getAllEmployees().subscribe((res)=>{
      this.allEmployees.data=res;
    });
    console.log(this.allEmployees)
  }

  openDeleteModel(id: number){
    let confirmDelete =this.dialog.open(DeleteEmployeeComponent,{
      width: "250px",
      data:{ id}
    });
    confirmDelete.afterClosed().subscribe((result)=>{
      if(result){
        this.allEmployees.data = this.allEmployees.data.filter(x=>x.id !== id)
      }
    })
    
  }
}
