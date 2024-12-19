import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'prd1', price: 22 ,description:'des1' },
    { id: 2, name: 'prd2', price: 24 ,description:'des2' },
    { id: 3, name: 'prd3', price: 23 ,description:'des3' }
  ];
  selectedProduct: any = null;

  selectProduct(product: any) {
    this.selectedProduct = product;
  }
}
