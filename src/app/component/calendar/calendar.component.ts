import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  // Notifications
  showNotifications = false;
  showLanguage = false;
  showAccount = false;

  tasks = [
    { day: 'Today', tasks: ['Task 1', 'Task 2', 'Task 3'] },
    { day: 'Monday', tasks: ['Task 1', 'Task 2', 'Task 3'] },
    { day: 'Tuesday', tasks: ['Task 1', 'Task 2'] },
    { day: 'Wednesday', tasks: ['Task 1', 'Task 2'] },
    { day: 'Thursday', tasks: ['Task 1'] },
    { day: 'Friday', tasks: ['Task 1', 'Task 2'] },
    { day: 'Saturday', tasks: ['Task 1'] }
  ];
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    this.showLanguage = false;
    this.showAccount = false;
  }

  toggleLanguage() {
    this.showLanguage = !this.showLanguage;
    this.showNotifications = false;
    this.showAccount = false;
  }

  toggleAccount() {
    this.showAccount = !this.showAccount;
    this.showNotifications = false;
    this.showLanguage = false;
  }
  constructor(private router : Router) {}

  logout(): void {
    // Aquí puedes añadir la lógica de cierre de sesión
    // Por ejemplo, eliminar el token de autenticación y redirigir al inicio de sesión
    localStorage.removeItem('authToken'); // o la clave que uses para almacenar el token
    this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
  }

}
