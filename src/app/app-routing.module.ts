import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DeleteEmployeeComponent } from './Components/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { RegisterComponent } from './Components/register/register.component';
import { EmployeesComponent } from './employees/employees.component';
import { ViewEmployeeComponent } from './Components/view-employee/view-employee.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'/login', pathMatch:"full"},
  {path:'app', component:AppComponent},
  {path:'home', component:HomeComponent,
   children:[
  {path:'dashboard', component:DashboardComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'employees', component:EmployeesComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'edit-employee/:id',component:EditEmployeeComponent},
  {path:'view-employee/:id',component:ViewEmployeeComponent},
  {path:'delete-employee/:id',component:DeleteEmployeeComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
