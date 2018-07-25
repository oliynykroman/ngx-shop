import {Component, OnInit} from '@angular/core';
import {PRODLIST} from "../../classes/productlist";
import {ProductList} from "../../classes/products";


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  pageTitle = 'List of products';

  allproducts = PRODLIST;

  eventHero:ProductList;


  selectedItem(ProductList):void{
    this.eventHero = ProductList;
  }
  constructor() {
  }

  ngOnInit() {

  }

}
