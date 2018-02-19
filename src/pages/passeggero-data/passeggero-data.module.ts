import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasseggeroDataPage } from './passeggero-data';

@NgModule({
  declarations: [
    PasseggeroDataPage,
  ],
  imports: [
    IonicPageModule.forChild(PasseggeroDataPage),
  ],
})
export class PasseggeroDataPageModule {}
