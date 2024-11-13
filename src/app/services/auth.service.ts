import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseServerUrl = "https://localhost:44334/api/User/";

  constructor(private http: HttpClient, private router: Router) {}

  // Método para crear un usuario
  createUser(user: { 
    name: string; 
    lastName: string; 
    email: string; 
    password: string; 
    phoneNumber: string; 
  }) {
    const payload = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      date: new Date().toISOString(),       // Genera una fecha actual
      isDeleted: false,                      // Asigna un valor por defecto
      modified: "initial",                   // Proporciona un valor inicial
      modifiedBy: "system",                  // Proporciona un valor inicial o del usuario actual
      usertype: { 
        name: "Customer",                    // O el tipo que corresponda
        isDeleted: false 
      }
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
      },
      {
        responseType: 'text',
      }
    );
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken'); // Elimina el token de localStorage
    this.router.navigate(['/']); // Redirige al usuario al inicio de sesión
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null; // Verifica si hay un token
  }
}
