// user.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      date: ['', Validators.required],
      modified: ['', Validators.required],
      modifiedBy: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      console.log('User:', user);
      // Aquí puedes manejar el envío de datos o llamar a un servicio
    }
  }
}
