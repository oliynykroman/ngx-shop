import {Injectable} from '@angular/core';
import {Product} from "../classes/products";
import {PRODLIST} from "../classes/productlist";
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {
  }

  getProducts(): Observable<Product[]> {
    return of(PRODLIST);
  }


}
