import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./profile.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  exports: [
    ProfileComponent,
    LoginComponent
  ]
})
export class ProfileModule {
}
