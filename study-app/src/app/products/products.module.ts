import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {BucketModule} from "../bucket/bucket.module";
import {BucketMiniComponent} from "../bucket/bucket-mini/bucket-mini.component";

@NgModule({
  imports: [
    CommonModule,
    BucketModule
  ],
  declarations: [
    ProductlistComponent,
    ProductdetailsComponent,
  ],
  exports: [
    ProductlistComponent,
    ProductdetailsComponent
  ]

})
export class ProductsModule { }
