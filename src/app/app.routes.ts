import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductsComponent} from './components/add-edit-products/add-edit-products.component';

export const routes: Routes = [
  { path: 'inicio', component: ListProductsComponent },
  { path: 'agregar', component: AddEditProductsComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }, // Redirige a listaproductos si no se encuentra la ruta
];
