import {Injectable} from '@angular/core';
import {Product} from "../classes/Product";
import {PRODUCTS} from "../classes/productList";
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProductById(id: number): Observable<Product> {
    return of(PRODUCTS.find(prod=>prod.id === id));
  }

  constructor() {

  }

}
