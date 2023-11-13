import { Injectable } from '@angular/core';
import { Product } from '../model/product/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    new Product(1, 'Memory Card', 500),
    new Product(2, 'Pen Drive', 750),
    new Product(3, 'Power Bank', 100),
    new Product(4, 'Computer', 100),
    new Product(5, 'Laptop', 100),
    new Product(6, 'Printer', 100),
  ];
  constructor() {}
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
  getProduct(id: number): Observable<Product> {
    var product = this.products?.find((data: Product) => data.productID == id);
    return of(product!);
  }
}
