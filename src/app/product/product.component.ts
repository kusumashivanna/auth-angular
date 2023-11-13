import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: Product[] | undefined;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
}
