import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Bucket} from "../../classes/Bucket";
import {Subscription} from "rxjs/index";
import {HeaderService} from "../../service/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalProducts: Bucket[];
  BuyBehaviorSubject: Subscription = null;
  BucketButtonState: Subscription = null;
  getBucketButtonState: boolean = true;

  constructor(private router: Router, private productService: ProductService, private headerService: HeaderService) {
  }

  getTotalProducts(): void {
    this.BuyBehaviorSubject = this.productService.BuyBehaviorSubject.subscribe((data) => {
      this.totalProducts = data;
    });
    this.BucketButtonState = this.headerService.BucketButtonState.subscribe((status) => {
      this.getBucketButtonState = status;
    });
  }

  goBucketButton(): void {
    this.headerService.setBucketState(false);
  }

  ngOnInit() {
    this.getTotalProducts();
  }

}
