import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-list-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts : Product[] = []

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this.getListProducts();
  }


  getListProducts() {
    this._productService.gestListProducts().subscribe((data) => {
      this.listProducts = data;
    });
  }

}



