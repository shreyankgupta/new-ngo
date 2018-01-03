import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from "@ionic/storage";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MorePage } from "../pages/more/more";
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { DonateGoodsPage } from "../pages/donate-goods/donate-goods";
import { DonateMoneyPage } from "../pages/donate-money/donate-money";



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupdbProvider } from '../providers/signupdb/signupdb';
import { LogindbProvider } from '../providers/logindb/logindb';
import { TopdonorsProvider } from '../providers/topdonors/topdonors';

import { DonategoodsProvider } from '../providers/donategoodsdb/donategoodsdb';
import { DonatemoneydbProvider } from '../providers/donatemoneydb/donatemoneydb';
import { ReqinvdbProvider } from '../providers/reqinvdb/reqinvdb';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MorePage,
    TabsPage,
    LoginPage,
    SignupPage,
    DonateGoodsPage,
    DonateMoneyPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MorePage,
    TabsPage,
    LoginPage,
    SignupPage,
   DonateGoodsPage,
    DonateMoneyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignupdbProvider,
    LogindbProvider,
    TopdonorsProvider,
    DonategoodsProvider,
    DonatemoneydbProvider,
    ReqinvdbProvider
  ]
})
export class AppModule {}
