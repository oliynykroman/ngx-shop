import {Component, OnInit} from '@angular/core';
import {Product} from "../../classes/products";
import {PRODLIST} from "../../classes/productlist";


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  selectItem: string = '';
  pageTitle: string = 'List of products';

  selectedProduct: Product;
  allProducts = PRODLIST;

  onProductSelect(isSelected: Product): void {
    this.selectedProduct = isSelected;
  }


  constructor() {
  }

  ngOnInit() {

  }

}
