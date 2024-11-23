import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      const userRole = this.authService.getRole();
      const requiredRole = route.data['role'];

      if (requiredRole && userRole !== requiredRole) {
        console.error('Acceso denegado. Rol requerido:', requiredRole);
        this.router.navigate(['/dashboard']); // Redirige al dashboard general
        return false;
      }

      return true; // Permitir acceso si el rol coincide
    } else {
      this.router.navigate(['/auth']); // Redirige al login si no está autenticado
      return false;
    }
  }
}
