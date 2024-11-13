import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  repeatPass : boolean = false;
  isSubmitted : boolean = false;

  constructor(private formBuilder: FormBuilder, private authService:AuthService, private toastr:ToastrService ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[
        Validators.required,Validators.minLength(6),Validators.pattern(/(?=.*[^a-zA-Z0-9])/)
      ]],
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
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      const userData = {
        name: this.form.value.name,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        password: this.form.value.password,
        phoneNumber: this.form.value.phoneNumber,
      };
  
      this.authService.createUser(userData).subscribe({
        next: (res: any) => {
          console.log('Registro exitoso:', res);
          this.form.reset();
          this.isSubmitted = false;
          this.toastr.success('New user created!', 'Registration Successful');
        },
        error: err => {
          console.error('Error en el registro:', err);
          this.toastr.error('Registration failed', 'Error');
        }
      });
      
    }
  }
  
}