import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isUserValid : boolean = false;

  constructor(private loginAuth : AuthService, private formBuilder : FormBuilder){}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group ({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(6)]]
    });
  }

  loginSubmited(): void {
    if (this.loginForm.valid) {

      console.log('Formulario enviado', this.loginForm.value);
      this.loginAuth.loginUser([
        this.loginForm.value.email,
        this.loginForm.value.password,
      ])
      .subscribe(res => {
        if (res == 'Failure') {
          this.isUserValid = false;
          alert('Login unsuccessful');
        } else {
          this.isUserValid = true;
          alert('Login successfull');
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
