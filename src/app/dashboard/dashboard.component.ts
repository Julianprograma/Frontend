import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Servicio de autenticación
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardContainerComponent implements OnInit {
  userRole: string = ''; // Almacena el rol del usuario

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Llama al método getRole() del AuthService para obtener el rol del usuario
    const role = this.authService.getRole();

    if (role) {
      this.userRole = role; // Asigna el rol al usuario

      // Redirige al dashboard correspondiente basado en el rol
      if (role === 'Admin') {
        this.router.navigate(['/admin-dashboard']); // Redirige al dashboard del admin
      } else if (role === 'Cliente') {
        this.router.navigate(['/client-dashboard']); // Redirige al dashboard del cliente
      } else {
        console.error('Rol desconocido:', role);
        this.authService.logout(); // Cierra sesión si el rol es desconocido
      }
    } else {
      // Si no hay rol, redirigir al login
      console.error('No se encontró el rol del usuario. Redirigiendo al login.');
      this.authService.logout();
    }
  }
}
