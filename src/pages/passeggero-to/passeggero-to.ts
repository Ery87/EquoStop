import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {googlemaps} from 'googlemaps';
import { PasseggeroDataPage } from '../passeggero-data/passeggero-data';

/**
 * Generated class for the PasseggeroToPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passeggero-to',
  templateUrl: 'passeggero-to.html',
})
export class PasseggeroToPage implements OnInit{

  autocompleteItems: any;
  autocomplete: any;
  acService:any;
  placesService: any;
  
 public from;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.from = {
      from: navParams.get('from'),
      place:navParams.get('place')
    };
    
    console.log(this.from);
  }
  onCancelSearch(): void {
    alert('cancell clicked');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasseggeroToPage');
  }
  ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();        
    this.autocompleteItems = [];
    this.autocomplete = {
    query: ''
    };        
    }



  updateSearch() {
console.log('modal > updateSearch');
if (this.autocomplete.query == '') {
this.autocompleteItems = [];
return;
}
let self = this; 
let config = { 
//types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
input: this.autocomplete.query, 
componentRestrictions: {  } 
}
this.acService.getPlacePredictions(config, function (predictions, status) {
console.log('modal > getPlacePredictions > status > ', status);
self.autocompleteItems = [];            
predictions.forEach(function (prediction) {              
self.autocompleteItems.push(prediction);
});
});
}


chooseItem(item){

  var to={
      to: "TO",
      place:item.description
  };
  this.navCtrl.push(PasseggeroDataPage, {
    to: to, from:this.from
});
  
}
}
