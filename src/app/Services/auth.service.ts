import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:5000/api/Register/";
  constructor(private http: HttpClient, private router:Router) { }

  signUp(userObj:any){
    return this.http.post<any>("http://localhost:5000/api/Register/signup", userObj);
  }

  login(userObj:any){
    return this.http.post<any>("http://localhost:5000/api/Register/login",userObj);
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
