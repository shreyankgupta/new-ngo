import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LogindbProvider } from "../../providers/logindb/logindb";
import { Users } from "../../shared/users";
import { HomePage } from "../../pages/home/home";
import { IonicStorageModule } from "@ionic/storage";
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
  constructor(public data: LogindbProvider,public storage: Storage, public load: LoadingController, public toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  setSession()
  {
    console.log(this.pk_email_id);
    this.storage.set('email',this.pk_email_id);
  }
//login
  onLogin() {
    let item = new Users(this.pk_email_id,'', '', '', this.password, '', '');
    this.data.login(item).subscribe(
      (data1:Users[]) => {
        if (data1.length==1) {
          this.storage.set('email',this.pk_email_id);
          this.storage.get('email').then((val=>{
            console.log(val)
          }));
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
