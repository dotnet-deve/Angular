import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from 'src/app/Validators/password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide: boolean = false;
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      surname: ['', [Validators.required]],
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
    if (!this.registerForm.valid) {
      return;
    }
    console.log(this.registerForm.value);
  }
}


