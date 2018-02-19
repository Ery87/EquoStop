import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DashboardPage} from '../pages/dashboard/dashboard';
import {PasseggeroPage} from '../pages/passeggero/passeggero';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { ConducentePage } from '../pages/conducente/conducente';
import { PasseggeroToPage } from '../pages/passeggero-to/passeggero-to';
import { PasseggeroDataPage } from '../pages/passeggero-data/passeggero-data';
import {ConducenteToPage} from '../pages/conducente-to/conducente-to';
import {ConducenteDataPage} from '../pages/conducente-data/conducente-data';
import { PasseggeroTappePage } from '../pages/passeggero-tappe/passeggero-tappe';
import {ListPage} from '../pages/list/list';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    PasseggeroPage,
    ConducentePage,
    PasseggeroToPage,
    PasseggeroDataPage,
    ConducenteToPage,
    ConducenteDataPage,
    PasseggeroTappePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
     NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    PasseggeroPage,
    ConducentePage,
    PasseggeroToPage,
    PasseggeroDataPage,
    ConducenteToPage,
    ConducenteDataPage,
    PasseggeroTappePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     BarcodeScanner,
     Toast
  ]
})
export class AppModule {}
