import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {PasseggeroPage} from '../passeggero/passeggero';
import { ConducentePage } from '../conducente/conducente';
import { PasseggeroTappePage } from '../passeggero-tappe/passeggero-tappe';
import { ListPage } from '../list/list';
import { HttpClient } from '@angular/common/http'; 
import { AddTechnologyPage } from '../add-technology/add-technology';
import { DashboardConducentePage } from '../dashboard-conducente/dashboard-conducente';

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
  popoverCtrl: any;
  following = false;
  user = {
    name: 'Paula Bolliger',
    profileImage: 'assets/imgs/girl-avatar.png',
    coverImage: 'assets/imgs/LvcRPuxdSzCFczSWhMdw_logoEquoStop.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    followers: 456,
    following: 1052,
    posts: 35
  };
  posts = [
    {
      text: `I believe in being strong when everything seems to be going wrong.
             I believe that happy girls are the prettiest girls.
             I believe that tomorrow is another day and I believe in miracles.`,
      date: 'November 5, 2016',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      
      text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
      date: 'October 23, 2016',
      likes: 30,
      comments: 64,
      timestamp: '30d ago'
    },
    {
     
      date: 'June 28, 2016',
      likes: 46,
      text: `Hope is the thing with feathers that perches in the soul
             and sings the tune without the words And never stops at all.`,
      comments: 66,
      timestamp: '4mo ago'
    },
  ];



  public items : Array<any> = []; 
  constructor(public navCtrl: NavController,public http : HttpClient) {

  }

  
  ionViewWillEnter() : 
  void { this.load(); 
  } 

  load() : void { 

    //this.http .get('http://localhost/retrive_data.php') .subscribe((data : any) => { console.dir(data); this.items = data; }, (error : any) => { console.dir(error); }); 
  }
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  passeggero(){
    this.navCtrl.push(PasseggeroPage,{
      val: 'passeggero'

    })
  }

  conducente(){
    this.navCtrl.push(DashboardConducentePage,{
       val:'dashboardConducente'
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
