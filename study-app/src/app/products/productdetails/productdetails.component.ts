import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../../classes/products";
import {BucketService} from "../../services/bucket.service";

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {
  @Input() productDet: Product;
  @Output() closeDetails = new EventEmitter();

  constructor(private bucketService: BucketService) {
  }

  removeSelected(): void {
    this.productDet = null;
    this.closeDetails.emit();
  }

  addToBucket(productTitle: string, productCount: number, ProductPrice: number){
    this.bucketService.addProduct(productTitle, ProductPrice, productCount);
  }


  ngOnInit() {
  }

}
