import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  onClick()
  {
    this.navCtrl.push(LoginPage);
  }

  onSignup(){
    this.navCtrl.push(SignupPage);
  }

}
