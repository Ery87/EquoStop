import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasseggeroTappePage } from './passeggero-tappe';

@NgModule({
  declarations: [
    PasseggeroTappePage,
  ],
  imports: [
    IonicPageModule.forChild(PasseggeroTappePage),
  ],
})
export class PasseggeroTappePageModule {}
