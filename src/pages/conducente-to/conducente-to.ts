import { Component,ViewChild, ElementRef, NgZone  } from '@angular/core';
import { Keyboard, NavParams, NavController, LoadingController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { Observable } from 'rxjs/Observable';


import {ConducenteDataPage} from '../conducente-data/conducente-data';

/**
 * Generated class for the ConducenteToPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-conducente-to',
  templateUrl: 'conducente-to.html',
})
export class ConducenteToPage{

    
  map: any;
  markers: any;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  loading: any;
 public from;


 constructor(
  public zone: NgZone,
  public geolocation: Geolocation,
  public navCtrl: NavController,
  public navParams: NavParams,
  public loadingCtrl: LoadingController
) {    this.from = {
      from: navParams.get('from'),
      place:navParams.get('place')
    };
    
    this.geocoder = new google.maps.Geocoder;
    let elem = document.createElement("div")
    this.GooglePlaces = new google.maps.places.PlacesService(elem);
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = {
      input: ''
    };
    this.autocompleteItems = [];
    this.markers = [];
    this.loading = this.loadingCtrl.create();
  }

      ionViewDidEnter(){
        console.log("entr");
          // let infoWindow = new google.maps.InfoWindow({map: map});
          //Set latitude and longitude of some place
        this.map = new google.maps.Map(document.getElementById('map2'), {
          center: {lat: 46.00323600000001, lng: 8.752003000000059},
          zoom: 15
        });
      }
    

      updateSearchResults(){
        if (this.autocomplete.input == '') {
          this.autocompleteItems = [];
          return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
          (predictions, status) => {
            this.autocompleteItems = [];
            if(predictions){
              this.zone.run(() => {
                predictions.forEach((prediction) => {
                  this.autocompleteItems.push(prediction);
                });
              });
            }
        });
      }
  
      selectSearchResult(item){
        this.clearMarkers();
        this.autocompleteItems = [];
    
        this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
          if(status === 'OK' && results[0]){
            // let position = {
            //     lat: results[0].geometry.location.lat,
            //     lng: results[0].geometry.location.lng
            // };
            let marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map: this.map
            });
            this.markers.push(marker);
            this.map.setCenter(results[0].geometry.location);
          }
        })
        this.ValidateResult(item);
      }
    
      clearMarkers(){
        for (var i = 0; i < this.markers.length; i++) {
          console.log(this.markers[i])
          this.markers[i].setMap(null);
        }
        this.markers = [];
      }

      ValidateResult(item) {
       
        var to={
          to: "TO",
          place:item.description
      };
    this.navCtrl.push(ConducenteDataPage, {
        to: to, from:this.from
    });
      
    } 
    

    }
    

