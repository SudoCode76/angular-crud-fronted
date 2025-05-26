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
  listProducts : Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 100,
      stock: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 200,
      stock: 10,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 300,
      stock: 10,
    }
  ]

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this.getListProducts();
  }


  getListProducts() {
    this._productService.gestListProducts().subscribe((data) => {
      console.log(data);
    })
  }
}



