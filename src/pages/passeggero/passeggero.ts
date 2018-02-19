import { Component, ViewChild,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {googlemaps} from 'googlemaps';
import { PasseggeroToPage } from '../passeggero-to/passeggero-to';

@IonicPage()
@Component({
  selector: 'page-passeggero',
  templateUrl: 'passeggero.html',

  
})
export class PasseggeroPage implements OnInit{

  autocompleteItems: any;
  autocomplete: any;
  acService:any;
  placesService: any;
  
  private destinazioni: FormGroup;
  

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    
      /*this.destinazioni = this.formBuilder.group({
        from: [''],
        to: ['']
    });
*/
  }

  ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();        
    this.autocompleteItems = [];
    this.autocomplete = {
    query: ''
    };        
    }

  searchP(): void { 
	    
		
    console.log(this.destinazioni.value.from);
    console.log(this.destinazioni.value.to);
    
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

  this.navCtrl.push(PasseggeroToPage, {
    from: "from", place: item.description
});
  
}

}

		

	

