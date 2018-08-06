import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductDetailsComponent} from "./products/product-details/product-details.component";

const routes:Routes = [
  {path:'', component:ProductListComponent},
  {path:'product-details/:id', component:ProductDetailsComponent},
]

@NgModule({
  exports:[RouterModule],
  imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
