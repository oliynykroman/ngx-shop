import {Component, OnInit} from '@angular/core';
import {BucketProducts, ProductService} from "../service/product.service";
import {Subscription} from "rxjs/index";

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

  removeItem(bucket: BucketProducts): void {
    console.log(bucket);
    for (let i = 0; i < this.totalProducts.length; i++){
      if (this.totalProducts[i].id === bucket.id){
        console.log(i);
        this.totalProducts.splice(i,1);
      }
    }
  }

  ngOnInit() {
    this.getAllBucketProducts();
  }

}
