import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {PasseggeroPage} from '../passeggero/passeggero';
import { ConducentePage } from '../conducente/conducente';
import { PasseggeroTappePage } from '../passeggero-tappe/passeggero-tappe';
import { ListPage } from '../list/list';
import { HttpClient } from '@angular/common/http'; 
import { AddTechnologyPage } from '../add-technology/add-technology';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  public items : Array<any> = []; 
  constructor(public navCtrl: NavController,public http : HttpClient) {

  }

  
  ionViewWillEnter() : 
  void { this.load(); 
  } 

  load() : void { 
    this.http .get('http://www.YOUR-SERVER-ADDRESS.SUFFIX/retrieve-data.php') .subscribe((data : any) => { console.dir(data); this.items = data; }, (error : any) => { console.dir(error); }); }
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  passeggero(){
    this.navCtrl.push(PasseggeroPage,{
      val: 'passeggero'

    })
  }

  conducente(){
    this.navCtrl.push(ConducentePage,{
        val:'conducente'
    })
  }


  passeggeroTappe(){
    this.navCtrl.push(ListPage,{
      val:'list'
    })
   
  }


  passeggero_f(){
    this.navCtrl.push(AddTechnologyPage,{
      val:'add-thecnology'
    })
  }
}
