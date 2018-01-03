import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonateGoodsPage } from './donate-goods';

@NgModule({
  declarations: [
    DonateGoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonateGoodsPage),
  ],
})
export class DonateGoodsPageModule {}
