import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Product} from "../../classes/Product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDet: Product;

  constructor(private setDetail: ProductService, private route: ActivatedRoute, private location: Location) {
  }

  getDetail(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.setDetail.getProductById(id).subscribe(productDet => this.productDet = productDet);
    console.log(this.productDet);
  }

  ngOnInit() {
    this.getDetail();
  }

}
