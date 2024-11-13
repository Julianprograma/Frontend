import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { DeleteProductDialogComponent } from './delete-product-dialog/delete-product-dialog.component';
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.css']
})
export class StockProductsComponent {
  
  constructor(private dialog : MatDialog , private snackBar: MatSnackBar) {}

  openAddProductDialog(): void {
    this.dialog.open(AddProductDialogComponent, {
      width: '400px'
    });
  }
  showDeleteNotification(): void {
    this.snackBar.open('Producto eliminado con éxito', 'Cerrar', {
      duration: 3000, // Duración de la notificación en milisegundos
      verticalPosition: 'top', // Posición vertical (top o bottom)
      horizontalPosition: 'center', // Posición horizontal (start, center, end, left, right)
      panelClass: ['delete-snackbar'] // Clase CSS personalizada para el estilo
    });
  }

  openDeleteProductDialog(): void {
    this.dialog.open(DeleteProductDialogComponent, {
      width: '400px'
    });
  }

  openEditProductDialog(): void {
    this.dialog.open(EditProductDialogComponent, {
      width: '400px'
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
