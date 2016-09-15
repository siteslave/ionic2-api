import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import {LoginPage} from '../login/login'

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private app: App) {
  
  }

  logout() {
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage)
  }
}
