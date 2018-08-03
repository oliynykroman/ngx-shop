import {Component, OnInit} from '@angular/core';
import {BucketService} from "../../services/bucket.service";
import {bucket} from "../../classes/bucket";

@Component({
  selector: 'app-bucket-mini',
  templateUrl: './bucket-mini.component.html',
  styleUrls: ['./bucket-mini.component.css']
})
export class BucketMiniComponent implements OnInit {
  productCount: number = 0;
  productPrice: number = 0;

  productsInBucket: bucket[] = [];

  constructor(private bucketProductsService: BucketService) {
  }

  getBucket(): void {
    // this.productsInBucket = this.bucketProductsService.getProduct();
    // this.productPrice = this.bucketProductsService.getProductSummTotal();
    // this.productCount = this.productsInBucket.length;
    // console.log(this.productsInBucket);
    // console.log(this.productPrice);
    // console.log(this.productCount);

    console.log(this.bucketProductsService.getProduct().subscribe(productsInBucket=>this.productsInBucket = productsInBucket));
    console.log(this.productsInBucket);

  }

  ngOnInit() {
    this.getBucket();
    // this.productCount = this.productCount;
    // this.productPrice = this.productPrice;

    // console.log(this.productCount);
  }

}
