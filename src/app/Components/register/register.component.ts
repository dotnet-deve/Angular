import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';
import { PasswordValidation } from 'src/app/Validators/password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide: boolean = false;
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, public auth: AuthService, public toast:NgToastService, public router: Router) {
  }

  ngOnInit() {

    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }
  // Getter method to access form control
  get myForm() {
    return this.registerForm.get('gender');
  }
  isSubmitted = false;

  onRegister() {
    if (this.registerForm.valid) {
      // returns data and obj to database
      this.auth.signUp(this.registerForm.value).subscribe({
        next:(res)=>{
          this.toast.success({detail:"SUCCESS", summary:res.message, duration: 3000});
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.toast.error({detail:"ERROR", summary:err?.error.message, duration:3000});
        },
      });
    }
    else{
       //throws an toastr error
       this.toast.error({detail:"ERROR", summary:"form is invalid", duration:3000});
    }
  }

}


