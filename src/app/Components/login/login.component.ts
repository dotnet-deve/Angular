import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgControlStatus } from '@angular/forms'
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
//import { ToastrService } from 'ngx-toastr/public_api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

  constructor(private fb: FormBuilder, public toastr:NgToastService, public router: Router, public auth:AuthService) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })



  onLogin() {
    if (this.loginForm.valid) {
      // returns data and obj to database
      this.auth.login(this.loginForm.value).subscribe({
        next:(res)=>{
          this.toastr.success({detail:"SUCCESS", summary:res.message, duration: 5000});
          this.loginForm.reset();
          this.router.navigate(['/home']);  
        },
        error: (err) => {
          this.toastr.error({detail:"ERROR", summary:err?.error.message, duration:3000});
        },
      });
    }
    else{
       //throws an toastr error
       this.toastr.error({detail:"ERROR", summary:"form is invalid", duration:3000});
    }
    
  }

}