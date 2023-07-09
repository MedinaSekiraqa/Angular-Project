import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.css']
})
export class EditProductDialogComponent {
  product: Product;

  constructor(
    public dialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }
  ) {
    this.product = { ...data.product }; // Copy the product to avoid modifying the original reference
  }

  save(): void {
    this.dialogRef.close(this.product);
  }
}
