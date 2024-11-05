import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  repeatPass : boolean = true;

  displayMsg : string = '';
  isAccountCreated : boolean = false;

  constructor(private formBuilder: FormBuilder, private authService:AuthService ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      confirmpassword: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern("[0-9]*"),Validators.minLength(10), Validators.maxLength(16)]]
    });

    this.form.get('password')?.valueChanges.subscribe(() => this.checkPasswords());
    this.form.get('confirmpassword')?.valueChanges.subscribe(() => this.checkPasswords());
  }
  checkPasswords() {
    const password = this.form.get('password')?.value;
    const confirmpassword = this.form.get('confirmpassword')?.value;

    this.repeatPass = password === confirmpassword; // Actualiza el estado
  }
    onSubmit(): void {
      if (this.form.valid) {
        console.log('Formulario enviado', this.form.value);

        this.authService.createUser([
          this.form.value.name,
          this.form.value.lastName,
          this.form.value.email,
          this.form.value.password,
          this.form.value.phoneNumber,

        ])
        .subscribe(res => {
          if (res == "Success"){
            this.displayMsg = 'Account Created Succesfully!';
            this.isAccountCreated = true;
          } else if (res == 'Already Exits'){
            this.displayMsg = 'Account Already Exits. Try another Email.';
            this.isAccountCreated = false;
          } else {
            this.displayMsg = 'Something went wrong.';
            this.isAccountCreated = false;
          }
        });
      } else {
        console.log('Formulario no válido');
      }
    }

}