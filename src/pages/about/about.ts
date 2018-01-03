import { Component } from '@angular/core';
import { NavController,LoadingController,ToastController } from 'ionic-angular';
import { Users } from "../../shared/users";
import { TopdonorsProvider } from "../../providers/topdonors/topdonors";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage {
  arr:Users[]=[];
  constructor(public navCtrl: NavController,public toast:ToastController,public data:TopdonorsProvider,public load:LoadingController) {

  }

  ionViewDidLoad()
  {
    let l1=this.load.create({
      content:"Loading.."
    });
    l1.present();
    this.data.getTopDonors().subscribe(
      (d:Users[])=>{this.arr=d;},
      function(e)
      {
        alert(e);
      },
      function()
      {
        l1.dismiss();
      }
    );
  }

}
