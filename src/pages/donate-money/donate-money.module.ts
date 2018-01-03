import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonateMoneyPage } from './donate-money';

@NgModule({
  declarations: [
    DonateMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(DonateMoneyPage),
  ],
})
export class DonateMoneyPageModule {}
