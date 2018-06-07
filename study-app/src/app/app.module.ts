import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './profile/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
