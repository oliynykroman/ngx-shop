import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Product} from "../../classes/Product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDet: Product;
  count: number = 1;

  constructor(private setDetail: ProductService, private route: ActivatedRoute, private location: Location,
              private router: Router) {
  }

  getDetail(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.setDetail.getProductById(id)
      .subscribe({
        next: productDet => this.productDet = productDet,
        error: err => {this.router.navigate(['/']); console.log(err)}
      })
    ;
  }

  buyProduct() {
    this.setDetail.setBuyProduct(this.productDet.id, this.count);
    this.setDetail.setBucketProduct();
  }

  ngOnInit() {
    this.getDetail();
  }

}
