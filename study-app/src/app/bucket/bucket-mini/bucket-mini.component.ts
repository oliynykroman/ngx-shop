import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bucket-mini',
  templateUrl: './bucket-mini.component.html',
  styleUrls: ['./bucket-mini.component.css']
})
export class BucketMiniComponent implements OnInit {
  productCount: number = 0;
  productPrice: number = 0;


  constructor() {
  }

  ngOnInit() {

    this.productCount = this.productCount++;
    this.productPrice += this.productPrice;
    // console.log(this.productCount);
  }

}
