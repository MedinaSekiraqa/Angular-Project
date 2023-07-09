import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = []; // Placeholder property for storing the list of products

  constructor() {
    // Initialize the list of products (you can replace this with actual data)
    this.products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 }
    ];
  }

  // Placeholder method for editing a product
  editProduct(product: any): void {
    console.log('Editing product:', product);
    // Implement your logic for editing a product
  }

  // Placeholder method for deleting a product
  deleteProduct(productId: number): void {
    console.log('Deleting product with ID:', productId);
    // Implement your logic for deleting a product
  }
}
