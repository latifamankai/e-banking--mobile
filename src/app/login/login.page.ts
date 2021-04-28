import { Component, OnInit } from '@angular/core';
import {User} from '../shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = new User();
  constructor() { }

  ngOnInit() {
  }

  connexion() {
    console.log(this.user);
  }
}
