import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {googlemaps} from 'googlemaps';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

/**
 * Generated class for the PasseggeroTappePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passeggero-tappe',
  templateUrl: 'passeggero-tappe.html',
})
export class PasseggeroTappePage implements OnInit{

  autocompleteItems: any;
  autocomplete: any;
  acService:any;
  placesService: any;
  public place;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();        
    this.autocompleteItems = [];
    this.autocomplete = {
    query: ''
    };        
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasseggeroTappePage');
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
     
    }

    chooseItem(item){

      this.place=item.description;
     


    }
}
