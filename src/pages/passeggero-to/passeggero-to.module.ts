import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasseggeroToPage } from './passeggero-to';

@NgModule({
  declarations: [
    PasseggeroToPage,
  ],
  imports: [
    IonicPageModule.forChild(PasseggeroToPage),
  ],
})
export class PasseggeroToPageModule {}
