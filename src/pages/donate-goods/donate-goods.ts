import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Request } from "../../shared/request";
import { DonategoodsProvider } from "../../providers/donategoodsdb/donategoodsdb";

/**
 * Generated class for the DonateGoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donate-goods',
  templateUrl: 'donate-goods.html',
})
export class DonateGoodsPage {


  pk_req_id:number;
  
  fk_email_id:string='gupta';
  req_type:string='pickup';
  req_desc:string;
  req_date:string='15/12/2017';
  address:string;
  req_qty:number;
  req_qty_unit:string;
  req_category:string;
  
  constructor(public Req:DonategoodsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateGoodsPage');
  }

  onSendReq()
  {
    //alert("hello");
   let item=new Request(null,this.fk_email_id, this.req_type, this.req_desc,this.req_date,this.address,this.req_qty,this.req_qty_unit,this.req_category);
    console.log(item);
    this.Req.addReq(item).subscribe((resp)=>{
      (data:any)=>{
      alert("Success");
      }
    });
  }
  }


