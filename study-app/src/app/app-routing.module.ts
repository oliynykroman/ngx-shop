import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductDetailsComponent} from "./products/product-details/product-details.component";
import {BucketComponent} from "./bucket/bucket.component";

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'bucket', component: BucketComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
