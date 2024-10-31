// user-login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../models/login.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './userlogin.component.html',
})
export class UserLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const loginData: UserLogin = this.loginForm.value;
      console.log('Login Data:', loginData);
      // Aquí puedes manejar la autenticación o llamar a un servicio
    }
  }
}
