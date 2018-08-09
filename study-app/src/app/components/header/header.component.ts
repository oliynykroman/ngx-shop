import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Bucket} from "../../classes/Bucket";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showHide:boolean = false;
  totalProducts: Bucket[];
  BuyBehaviorSubject: Subscription = null;

  constructor(private router: Router, private productService: ProductService) {
  }

  getTotalProducts(): void {
    this.BuyBehaviorSubject = this.productService.BuyBehaviorSubject.subscribe((data) => {
      this.totalProducts = data;
    });
  }


  selectFullBucket(): void {
    this.productService.getBucketProduct();
    this.productService.showHideBucketButton(this.showHide);
  }

  ngOnInit() {
    this.getTotalProducts();
  }

}
