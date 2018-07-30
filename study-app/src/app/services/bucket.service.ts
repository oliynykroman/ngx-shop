import {Injectable} from '@angular/core';
import {bucket} from "../classes/bucket";
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private bucketData: bucket[] = [];


  addProduct(productTitle: string, ProductPrice: number, ProductCount: number) {
    this.bucketData.push(new bucket(productTitle, ProductPrice, ProductCount));
  }

  // getProduct(): bucket[] {
  //   return this.bucketData;
  // }

  getProduct(): Observable<bucket[]> {
    return of(this.bucketData);
  }

  // getProductSummTotal() {
  //   let productSumm: number = 0;
  //   for (let i = 0; this.bucketData.length; i++) {
  //     return productSumm += this.bucketData[i].productPrice;
  //   }
  // }

  // removeAllProducts() {
  //   this.buyproducts = [];
  // }

  constructor() {
  }


}
