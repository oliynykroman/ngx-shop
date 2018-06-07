import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./profile.component";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
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
