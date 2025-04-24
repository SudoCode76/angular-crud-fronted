import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { ListProductsComponent } from '../app/components/list-products/list-products.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ListProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-fronted';
}
