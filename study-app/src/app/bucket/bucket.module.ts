import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketFullComponent } from './bucket-full/bucket-full.component';
import { BucketMiniComponent } from './bucket-mini/bucket-mini.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BucketFullComponent,
    BucketMiniComponent],
  exports:[
    BucketFullComponent,
    BucketMiniComponent
  ]
})
export class BucketModule { }
