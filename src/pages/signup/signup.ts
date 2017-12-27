import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupdbProvider } from "../../providers/signupdb/signupdb";
import { LoginPage } from "../../pages/login/login";
import { Users } from "../../shared/users";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
pk_email_id:string;
  user_name:string;
  mobile_no:string;
  gender:string;
  password:string;
  display_pic:string;
  user_type:string;


  constructor(public user:SignupdbProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

doSignup(){
  let item = new Users(this.pk_email_id,this.user_name, this.mobile_no, this.gender, this.password, this.display_pic,'user');
  
  this.user.addUser(item).subscribe((resp)=>{
    this.navCtrl.push(LoginPage);
  })
}


}
