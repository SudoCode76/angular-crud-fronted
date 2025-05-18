import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';

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
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 300,
    }
  ]
}
