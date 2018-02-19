import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {DashboardPage} from '../dashboard/dashboard';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SplashScreen } from '@ionic-native/splash-screen';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) { }
 
    scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }
 
  dashboard(){
    this.navCtrl.push(DashboardPage,{
      val: 'dashboard'

    })
  }

}