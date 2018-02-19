import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {googlemaps} from 'googlemaps';
import {ConducenteDataPage} from '../conducente-data/conducente-data';

/**
 * Generated class for the ConducenteToPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conducente-to',
  templateUrl: 'conducente-to.html',
})
export class ConducenteToPage implements OnInit{

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
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConducenteToPage');
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
    onCancelSearch(): void {
      alert('cancell clicked');
    }
  
    
    chooseItem(item){
    
      var to={
          to: "TO",
          place:item.description
      };
    this.navCtrl.push(ConducenteDataPage, {
        to: to, from:this.from
    });

      
    }
    }
    

