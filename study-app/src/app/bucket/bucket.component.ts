import {Component, OnInit} from '@angular/core';
import {BucketProducts, ProductService} from "../service/product.service";
import {Subscription} from "rxjs/index";
import {HeaderService} from "../service/header.service";

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  totalProducts: BucketProducts[];
  BucketBehaviorSubject: Subscription = null;
  totalPrice: number = 0;

  constructor(private productService: ProductService, private headerService: HeaderService) {
  }

  getAllBucketProducts(): void {
    this.BucketBehaviorSubject = this.productService.BucketBehaviorSubject.subscribe((data) => {
      this.totalProducts = data;
      this.priceCalc();
    });
  }

  priceCalc():void{
    for (let i = 0; i < this.totalProducts.length; i++) {
      this.totalPrice = this.totalPrice + this.totalProducts[i].totalCount * this.totalProducts[i].price;
    }
  }

  buyProduct(prodId, prodCount): void {
    this.totalPrice = 0;
    this.productService.setBuyProduct(prodId, prodCount);
    this.productService.setBucketProduct();

  }


  removeBucketItem(item): void {
    this.totalPrice = 0;
    this.productService.removeBucketProduct(item);
    this.priceCalc();
  }

  goShopButton(): void {
    this.headerService.setBucketState(true);
  }


  ngOnInit() {
    this.getAllBucketProducts();


  }

}
