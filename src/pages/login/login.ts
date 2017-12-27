import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LogindbProvider } from "../../providers/logindb/logindb";
import { Users } from "../../shared/users";
import { HomePage } from "../../pages/home/home";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  pk_email_id: string = "";
  user_name: string = "";
  mobile_no: string = "";
  gender: string = "";
  password: string = "";
  display_pic: string = "";
  user_type: string = "";
  constructor(public data: LogindbProvider, public load: LoadingController, public toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    let item = new Users(this.pk_email_id,'', '', '', this.password, '', '');
    this.data.getUserById(item).subscribe(
      (data1:Users[]) => {
        if (data1.length == 1) {
          this.navCtrl.push(HomePage);
          
        }
        else {
         alert("Something Wrong");
        }

      },
      function (e) {
        alert(e);
      }
    );
  }
}
