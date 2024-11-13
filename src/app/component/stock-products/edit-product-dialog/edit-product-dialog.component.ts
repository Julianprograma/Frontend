import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.css']
})
export class EditProductDialogComponent {

  constructor(private dialogRef: MatDialogRef<EditProductDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
