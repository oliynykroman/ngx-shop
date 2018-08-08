import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {ProductService} from "../../service/product.service";
import {Product} from "../../classes/Product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: 'Product list';
  Products: Product[];

  constructor(private router: Router, private productService: ProductService) {

  }

  getProducts(): void {
  this.productService.getProducts().subscribe(products=>this.Products = products);
  }

  OnSelect(productId: number) {
    this.router.navigate(['/product-details', productId]); //router
  }

  ngOnInit() {
    this.getProducts();
  }

}
