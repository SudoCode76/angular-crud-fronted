import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';
import {ProductService} from '../../services/product.service';
import {ProgressBarComponent} from '../../shared/progress-bar/progress-bar.component';

@Component({
  selector: 'app-list-products',
  imports: [CommonModule, RouterLink, ProgressBarComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts : Product[] = []
  loading: boolean = false;

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this.getListProducts();
  }


  getListProducts() {
    this.loading = true;
    this._productService.gestListProducts().subscribe((data) => {
      this.listProducts = data;
      this.loading = false;
    });
  }

  deleteProduct(id: number) {
    console.log(id);
    this.loading = true;
    this._productService.deleteProduct(id).subscribe(() => {
      this.getListProducts();

    })
  }
}



