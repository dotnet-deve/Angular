import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployees } from '../IEmployees';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(public http: HttpClient) {}
  apiUrl="http://localhost:3000/Employees";

  //get all records
  getAllEmployees(): Observable<IEmployees[]> {
    return this.http.get<IEmployees[]>(this.apiUrl);
  }
  // add new employee record
  addNewEmployee(payload:IEmployees):Observable<IEmployees>{
    return this.http.post<IEmployees>(this.apiUrl,payload)
  }

  //get by id
  getById(id:number):Observable<IEmployees>{
    return this.http.get<IEmployees>(`http://localhost:3000/Employees/${id}`);
  }
  //update by the id
  updateEmployee(payload:IEmployees):Observable<IEmployees>{
    return this.http.put<IEmployees>(`http://localhost:3000/Employees/${payload.id}`,payload)
  }

  //Delete by id
  deleteById(id:number):Observable<IEmployees>{
    return this.http.delete<IEmployees>(`http://localhost:3000/Employees/${id}`);
  }

}
