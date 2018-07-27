import { Injectable } from '@angular/core';
import {Product} from "../classes/products";

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  buyproducts:Product[] = [];

  addProduct(buyedproduct: Product){
    this.buyproducts.push(buyedproduct);
  }
  removeAllProducts(){
    this.buyproducts = [];
  }

  constructor() { }




}
