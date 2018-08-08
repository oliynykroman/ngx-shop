import {Injectable} from '@angular/core';
import {Product} from "../classes/Product";
import {Bucket} from "../classes/Bucket";
import {PRODUCTS} from "../classes/productlist.model";
import {BehaviorSubject, Observable, of} from "rxjs/index";
import {Router} from "@angular/router";

// extend Product class with new property
export class BucketProducts extends Product {
  totalCount: number;

  constructor(id: number, title: string, descr: string, price: number, count: number, totalCount: number) {
    super(id, title, descr, price, count);
    this.totalCount = totalCount;
  }
};

const BUCKETPRODUCTS: BucketProducts[] = [];

const BUYPRODUCTS: Bucket[] = [];
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  public BuyBehaviorSubject = new BehaviorSubject(BUYPRODUCTS);
  public BucketBehaviorSubject = new BehaviorSubject(BUCKETPRODUCTS);

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
  }

  getBucketProduct(){
    for (let i = 0; i < BUYPRODUCTS.length; i++) {
      let item = PRODUCTS.find(item => item.id === BUYPRODUCTS[i].id);
      if (item) {
        BUCKETPRODUCTS.push(new BucketProducts(item.id, item.title, item.descr, item.price, item.count, BUYPRODUCTS[i].count));
      }
    }
  }

  constructor(private router: Router) {
  }

}
