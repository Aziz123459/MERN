import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductDetailsComponent,ProductListComponent,ProductSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-dashboard';
}
