import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated es el valor por defecto y aislará los estilos del componente
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isUserValid : boolean = false;
  isSubmitted : boolean = false;

  constructor(
    private loginAuth : AuthService, 
    private formBuilder : FormBuilder, 
    private toastr: ToastrService,
    private router: Router ){}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group ({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(6)]]
      
    });
  }

  loginSubmited(): void {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
  
      console.log('Formulario enviado', this.loginForm.value);
      this.loginAuth.loginUser([
        this.loginForm.value.email,
        this.loginForm.value.password,
      ])
      .subscribe({
        next: (res: any) => {
          if (res.successful) {
            this.loginForm.reset();
            this.isSubmitted = false;
            this.toastr.success('Welcome user!', 'Login Successful');
          } else {
            console.log('response:', res);
          }
        },
        error: (err: any) => console.log('error', err)
      });
    } else {
      console.log('Formulario no válido');
    }
  }
  
}
