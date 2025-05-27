import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Product} from '../../interfaces/product';
import {ProductService} from '../../services/product.service';
import {ProgressBarComponent} from '../../shared/progress-bar/progress-bar.component';
import {NgIf} from '@angular/common';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-add-edit-products',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    ProgressBarComponent,
    NgIf
  ],
  templateUrl: './add-edit-products.component.html',
  styleUrl: './add-edit-products.component.css'
})
export class AddEditProductsComponent {
  form: FormGroup;
  loading : boolean = false;
  id: number;
  operacion: string = 'Add Product';

  constructor(private fb: FormBuilder,
              private _productService: ProductService,
              private router : Router,
              private toastr: ToastrService,
              private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

ngOnInit() {
    if (this.id != 0) {
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }


  getProduct(id: number) {
    this.loading = true;
    this._productService.getProduct(id).subscribe((data: Product) => {
      console.log(data);
      this.loading = false;
      this.form.patchValue(data);
    })
  }

  addProduct(){
    const product: Product = {
      id: this.form.value.id,
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,
    }

    this.loading = true;
    if(this.id != 0) {
      product.id = this.id;
      this._productService.updateProduct(this.id, product).subscribe(() => {
        console.log('Product updated successfully');
        this.toastr.info('Product updated successfully', 'Product Updated');
        this.loading = false;
        this.router.navigate(['/']);
      });
      return;
    }else{
      this._productService.saveProduct(product).subscribe(()=> {
        console.log('Product saved successfully');
        this.toastr.success('Product saved successfully', 'Product Added');
        this.loading = false;
        this.router.navigate(['/']);
      })
    }

  }

}
