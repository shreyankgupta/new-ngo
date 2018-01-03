import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";
import { DonateGoodsPage } from "../donate-goods/donate-goods";
import { DonateMoneyPage } from '../donate-money/donate-money';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }



  onGoods()
  {
    this.navCtrl.push(DonateGoodsPage);
  }

  onMoney()
  {
    this.navCtrl.push(DonateMoneyPage);
  }
  onLogin()
  {
    this.navCtrl.push(LoginPage);
  }

  onSignup(){
    this.navCtrl.push(SignupPage);
  }

}
