import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { DeleteProductDialogComponent } from './delete-product-dialog/delete-product-dialog.component';
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.css']
})
export class StockProductsComponent {

  // Notifications
  showNotifications = false;
  showLanguage = false;
  showAccount = false;

  dropdown: string | null = null; // Variable para rastrear el desplegable abierto

  toggleDropdown(action: string): void {
    this.dropdown = this.dropdown === action ? null : action;
  }

  addProduct(): void {
    alert('Producto agregado.');
    this.dropdown = null; // Cierra el desplegable
  }

  deleteProduct(): void {
    alert('Producto borrado.');
    this.dropdown = null; // Cierra el desplegable
  }

  editProduct(): void {
    alert('Producto modificado.');
    this.dropdown = null; // Cierra el desplegable
  }

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
  
  constructor(private dialog : MatDialog , private snackBar: MatSnackBar, private router : Router, private authService : AuthService) {}

  // Método para cerrar sesión
  logout(): void {
    this.authService.logout(); // Llama al servicio de autenticación para cerrar sesión
    this.router.navigate(['/']); // Redirige al usuario a la página de inicio de sesión
  }
  showDeleteNotification(): void {
    this.snackBar.open('Producto eliminado con éxito', 'Cerrar', {
      duration: 3000, // Duración de la notificación en milisegundos
      verticalPosition: 'top', // Posición vertical (top o bottom)
      horizontalPosition: 'center', // Posición horizontal (start, center, end, left, right)
      panelClass: ['delete-snackbar'] // Clase CSS personalizada para el estilo
    });
  }
  products = [
    { name: 'Bujias', quantity: 200, code: 'FR008', price: 50000 },
    { name: 'Aceite', quantity: 2, code: 'FR008', price: 50000 },
    { name: 'Aceite', quantity: 2, code: 'FR008', price: 50000 },
    { name: 'Bujias', quantity: 200, code: 'FR008', price: 50000 },
    { name: 'Aceite', quantity: 2, code: 'FR008', price: 50000 },
    // Agrega más productos según sea necesario
  ];

  pages = Array.from({ length: 10 }, (_, i) => i + 1);
  currentPage = 1;
  
}
