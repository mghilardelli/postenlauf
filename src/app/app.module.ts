import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { PostenPage } from '../pages/posten/posten';
import { RanglistePage } from '../pages/rangliste/rangliste';
import { TeilnehmerPage } from '../pages/teilnehmer/teilnehmer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostenServiceProvider } from '../providers/posten-service/posten-service';
import { Keyboard } from '@ionic-native/keyboard'; 

import {HttpModule} from '@angular/http'; 
import {AngularFireDatabaseModule} from 'angularfire2/database'; 
import {AngularFireModule} from 'angularfire2'; 
import { PostendetailPage } from '../pages/postendetail/postendetail';
import { TeilnehmerServiceProvider } from '../providers/teilnehmer-service/teilnehmer-service';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAHYqg1dms1XFObxThuA3_rQWS4X8YybTs",
  authDomain: "postenlauf-e372d.firebaseapp.com",
  databaseURL: "https://postenlauf-e372d.firebaseio.com",
  projectId: "postenlauf-e372d",
  storageBucket: "postenlauf-e372d.appspot.com",
  messagingSenderId: "431303393950"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    PostenPage,
    TeilnehmerPage,
    RanglistePage,
    PostendetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    AngularFireDatabaseModule, 
    AngularFireModule.initializeApp(config), 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    PostenPage,
    TeilnehmerPage,
    RanglistePage,
    PostendetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostenServiceProvider,
    TeilnehmerServiceProvider
  ]
})
export class AppModule {}
