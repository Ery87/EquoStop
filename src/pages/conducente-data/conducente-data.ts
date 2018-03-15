import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConducenteDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conducente-data',
  templateUrl: 'conducente-data.html',
})
export class ConducenteDataPage {

  public from;
  public to;

place={}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.from=navParams.get('from');
    this.to= navParams.get('to');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConducenteDataPage');
  }
  conferma(){
    console.log(this.place);
  }
}
