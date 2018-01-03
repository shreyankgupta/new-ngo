import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicStorageModule,Storage } from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  id:string;
  constructor(public navCtrl: NavController,public storage:Storage) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.storage.get('email').then((val)=>{
    });
    }
 
    
  }

