import {Injectable} from '@angular/core';
import {Product} from "../classes/Product";
import {Bucket} from "../classes/Bucket";
import {PRODUCTS} from "../classes/productList";
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
      let i = 0;
      while (i < BUYPRODUCTS.length) {
        console.log(BUYPRODUCTS[i].id);
        console.log(id);
        if (BUYPRODUCTS[i].id === id) {
          BUYPRODUCTS[i].count += count;
        } else {
          BUYPRODUCTS.push(new Bucket(id, count));
        }
        i++;
      }
    }
    console.log(BUYPRODUCTS);
  }

  getBuyProduct() {

  }

  constructor(private router: Router) {

  }

}
