import {Component, OnInit} from '@angular/core';
import {Product} from "../../classes/products";
import {ProductService} from "../../services/buy-product.service";


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  selectItem: string = '';
  pageTitle: string = 'List of products';
  selectedProduct: Product;
  allproducts: Product[];


  onProductSelect(isSelected: Product): void {
    this.selectedProduct = isSelected;
  }

  constructor(private productService: ProductService) {
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products=>this.allproducts = products);
  }

  ngOnInit() {
    this.getProducts();
  }

}
