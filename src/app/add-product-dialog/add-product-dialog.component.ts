import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from '../product';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent {
  product: Product = {
    id: 0, // Set a default value, such as 0
    name: '',
    price: 0 // Set a default value, such as 0
  };

  constructor(public dialogRef: MatDialogRef<AddProductDialogComponent>) { }

  save(): void {
    this.dialogRef.close(this.product);
  }
}
