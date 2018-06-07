import {Component, OnInit} from '@angular/core';
import {LoginToken} from "../../../classes/profile";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public pageTitle = 'Login'

  // login information
  login: LoginToken = {
    username: 'romano',
    pass: 'romano'
  }

  constructor() {
  }

  ngOnInit() {
  }

}
