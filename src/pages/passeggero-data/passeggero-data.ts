import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PasseggeroDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passeggero-data',
  templateUrl: 'passeggero-data.html',
})
export class PasseggeroDataPage {

  public from;
  public to;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.from=navParams.get('from');
    this.to= navParams.get('to');

  
    console.log(this.to.place);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasseggeroDataPage');
  }

}
