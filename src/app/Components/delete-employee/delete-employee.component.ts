import { Dialog } from '@angular/cdk/dialog';
import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
  constructor(public dialogRef: MatDialogRef<DeleteEmployeeComponent>, private employees: EmployeesService, @Inject(MAT_DIALOG_DATA) public data:Dialog |any){}

  confirmDelete(){
    this.employees.deleteById(this.data.id).subscribe(()=>{
      this.dialogRef.close(this.data.id);
    });
  }
}
