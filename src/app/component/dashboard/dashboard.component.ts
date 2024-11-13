import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Notifications
  showNotifications = false;
  showLanguage = false;
  showAccount = false;

  // Variables para almacenar estadísticas y accesos directos
  currentTurn: string = 'C44';
  nextTurn: string = 'M33';
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

  constructor(private authService: AuthService, private router: Router) {}

  // Método para cerrar sesión
  logout(): void {
    this.authService.logout(); // Llama al servicio de autenticación para cerrar sesión
    this.router.navigate(['/']); // Redirige al usuario a la página de inicio de sesión
  }
}
