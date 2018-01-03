import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonatemoneydbProvider } from "../../providers/donatemoneydb/donatemoneydb";
import { Payment } from "../../shared/payment";

/**
 * Generated class for the DonateMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donate-money',
  templateUrl: 'donate-money.html',
})
export class DonateMoneyPage {

  pk_pay_id:number;
  
  fk_email_id:string='gupta';
  amount:number;
  fk_don_id:number=2;
 card_no:number;
 card_name:string;
 card_type:string;
 fk_don_date:string="15/12/2015";

  constructor(public pay:DonatemoneydbProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateMoneyPage');
  }

  onPay()
  {
    //alert("hello");
   let item=new Payment(null,this.fk_email_id, this.amount, this.fk_don_id,this.card_no,this.card_name,this.card_type,this.fk_don_date);
    console.log(item);
    this.pay.addMoney(item).subscribe((resp)=>{
      (data:any)=>{
        alert("Success");
      }

      });
  }
}
