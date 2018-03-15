import { Component, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { Keyboard, NavParams, NavController, LoadingController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { Observable } from 'rxjs/Observable';

declare var google;
 
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  ValidateResult(arg0: any): any {
    throw new Error("Method not implemented.");
  }

 
  ionViewDidLoad() {
     
  }
 
}