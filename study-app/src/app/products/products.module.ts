import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductlistComponent,
    ProductdetailsComponent
  ],
  exports: [
    ProductlistComponent,
    ProductdetailsComponent
  ]

})
export class ProductsModule { }
