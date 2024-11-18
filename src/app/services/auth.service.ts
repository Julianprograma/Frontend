import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseServerUrl = "https://webaplicacion.somee.com/api/User/";

  private selectedRole: string = 'Cliente'; // Rol por defecto

  constructor(private http: HttpClient, private router: Router) {}

  // Método para registrar un usuario
  createUser(user: { 
    name: string; 
    lastName: string; 
    email: string; 
    password: string; 
    phoneNumber: string; 
  }) {
    const parsedPhoneNumber = Number(user.phoneNumber);
    if (isNaN(parsedPhoneNumber)) {
      throw new Error('Phone number is invalid.');
    }

    const payload = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phoneNumber: parsedPhoneNumber,
      date: new Date().toISOString(),
      isDeleted: false,
      modified: "",
      modifiedBy: "system",
      userTypeId: this.selectedRole === 'Admin' ? 2 : 1 // Asigna ID de rol
    };

    return this.http.post(this.baseServerUrl + 'register', payload, {
      responseType: 'text',
    });
  }

  // Método para iniciar sesión
  loginUser(loginInfo: Array<string>) {
    return this.http.post(this.baseServerUrl + 'login', {
      Email: loginInfo[0],
      Password: loginInfo[1],
    }).subscribe((response: any) => {
      if (response?.success && response.token && response.user?.userType) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
  
        // Redirigir según el rol del usuario
        if (response.user.userType === 'Admin') {
          this.router.navigate(['/admin-dashboard']); // Redirige al dashboard del admin
        } else if (response.user.userType === 'Cliente') {
          this.router.navigate(['/client-dashboard']); // Redirige al dashboard del cliente
        } else {
          console.error('Rol desconocido:', response.user.userType);
          this.router.navigate(['/auth']); // Redirige al login si el rol es desconocido
        }
      } else {
        console.error('Respuesta del backend incompleta:', response);
      }
    }, error => {
      console.error('Error en la solicitud de login:', error);
    });
  }
  
  
  

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem('authToken') !== null;
    }
    return false;
  }

  // Obtener el rol del usuario desde localStorage
  getRole(): string | null {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        console.log('Rol recuperado del localStorage:', parsedUser.userType); // Agrega este log
        return parsedUser.userType; // Devuelve el rol (Admin o Cliente)
      } catch (error) {
        console.error('Error al parsear el usuario de localStorage:', error);
        return null;
      }
    }
    return null; // Si no hay usuario, devuelve null
  }
  

  // Verificar si el usuario es Admin
  isAdmin(): boolean {
    return this.getRole() === 'Admin';
  }

  // Verificar si el usuario es Cliente
  isCliente(): boolean {
    return this.getRole() === 'Cliente';
  }

  // Métodos para manejar el rol seleccionado durante el registro
  setSelectedRole(role: string): void {
    this.selectedRole = role;
  }

  getSelectedRole(): string {
    return this.selectedRole;
  }
}
