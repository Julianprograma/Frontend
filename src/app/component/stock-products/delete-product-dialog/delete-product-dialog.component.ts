import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-product-dialog',
  templateUrl: './delete-product-dialog.component.html',
  styleUrls: ['./delete-product-dialog.component.css']
})
export class DeleteProductDialogComponent {

  constructor(private dialogRef: MatDialogRef<DeleteProductDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
