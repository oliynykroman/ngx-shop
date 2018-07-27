import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../../classes/products";

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {
  @Input() productDet: Product;
  @Output() closeDetails = new EventEmitter();

  constructor() {
  }

  removeSelected(): void {
    this.productDet = null;
    this.closeDetails.emit();
  }

  addToButton(product): void {
    this.productDet = product;
  }

  ngOnInit() {
  }

}
