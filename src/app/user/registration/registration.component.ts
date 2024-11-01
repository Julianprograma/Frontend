import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: [''],
      Lastname: [''],
      Email: [''],
      Password: [''],
      confirmPassword: ['']
    });
  }
    onSubmit(): void {
      if (this.form.valid) {
        console.log('Formulario enviado', this.form.value);
      } else {
        console.log('Formulario no válido');
      }
  }
}
