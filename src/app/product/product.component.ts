import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result: Product) => {
      if (result) {
        this.productService.addProduct(result);
        alert('Product successfully added!');
      }
    });
  }

  editProduct(product: Product): void {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      width: '250px',
      data: { product }
    });

    dialogRef.afterClosed().subscribe((result: Product) => {
      if (result) {
        this.productService.editProduct(result);
        alert('Product successfully updated!');
      }
    });
  }

  deleteProduct(productId: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId);
      alert('Product successfully deleted!');
    }
  }

  logout(): void {
    // Implement the logic to redirect to the login page
  }
}
