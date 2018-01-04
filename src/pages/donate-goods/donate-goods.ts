import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Request } from "../../shared/request";
import { Reqinv } from "../../shared/reqinv";
import { DonategoodsProvider } from "../../providers/donategoodsdb/donategoodsdb";
import { ReqinvdbProvider } from "../../providers/reqinvdb/reqinvdb";
import { Inventory } from '../../shared/inventory';
import { Stuffcat } from '../../shared/stuffcat';

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

  arr: Stuffcat[] = [];
  pk_req_id: number;

  fk_email_id: string = 'gupta';
  req_type: string = 'pickup';
  req_desc: string;
  req_date: string = '15/12/2017';
  address: string;
  req_qty: number;
  req_qty_unit: string;
  req_category: string;
  pk_stuff_id: number;
  s_category: number;




  constructor(public Req: DonategoodsProvider, public reqinv: ReqinvdbProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateGoodsPage');

    this.reqinv.getCat().subscribe(

      (data: any) => {
        this.arr = data;
        console.log(this.arr);
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );

  }

  onSendReq() {
    //alert("hello");
    let item = new Request(null, this.fk_email_id, this.req_type, this.req_desc, this.req_date, this.address, this.req_qty, this.req_qty_unit, this.s_category);
    console.log(item);
    this.Req.addReq(item).subscribe((resp) => {
      (data: any) => {
        alert("Success");
      }
    });
  }
}


