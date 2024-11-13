import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddProductDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
