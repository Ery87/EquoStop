import { Component,OnInit,Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams,Keyboard } from 'ionic-angular';
import {googlemaps} from 'googlemaps';
import {ConducenteToPage} from '../conducente-to/conducente-to';
/**
 * Generated class for the ConducentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conducente',
  templateUrl: 'conducente.html',
})
export class ConducentePage implements OnInit{

  autocompleteItems:any;
  autocomplete:any;
  acService:any;
  placesService:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private renderer:Renderer, public keyboard: Keyboard) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConducentePage');
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

        this.navCtrl.push(ConducenteToPage, {
          from: "from", place: item.description
      });
       
      }
      

}
