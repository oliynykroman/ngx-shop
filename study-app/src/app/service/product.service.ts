import {Injectable} from '@angular/core';
import {Product} from "../classes/Product";
import {Bucket} from "../classes/Bucket";
import {PRODUCTS} from "../classes/productlist.model";
import {BehaviorSubject, Observable, of} from "rxjs/index";
import {Router} from "@angular/router";

const BUYPRODUCTS: Bucket[] = [];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  public BuyBehaviorSubject = new BehaviorSubject(BUYPRODUCTS);

  getProductById(id: number): Observable<Product> {
    let product: any = PRODUCTS.find(prod => prod.id === id);
    if (product !== undefined) {
      return of(product);
    } else {
      this.router.navigate(['/']); //router
      return null;
    }
  }

  setBuyProduct(id: number, count: number) {
    if (BUYPRODUCTS.length === 0) {
      BUYPRODUCTS.push(new Bucket(id, count));
    } else {
      let item = BUYPRODUCTS.find(item => item.id === id);
      if (!item) {
        BUYPRODUCTS.push(new Bucket(id, count));
      }
      else {
        item.count += count;
      }
    }
    console.log(BUYPRODUCTS);
  }


  getBuyProduct() {

  }

  constructor(private router: Router) {}

}
