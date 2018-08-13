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

  constructor(private productService: ProductService) {
  }

  getAllBucketProducts(): void {
    this.BucketBehaviorSubject = this.productService.BucketBehaviorSubject.subscribe((data) => {
      this.totalProducts = data;
    })
  }

  removeBucketItem(item: BucketProducts): void {
    this.productService.removeBucketProduct(item);
  }



  ngOnInit() {
    this.getAllBucketProducts();
  }

}
