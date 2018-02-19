import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasseggeroPage } from './passeggero';

@NgModule({
  declarations: [
    PasseggeroPage,
  ],
  imports: [
    IonicPageModule.forChild(PasseggeroPage),
  ],
})
export class PasseggeroPageModule {}
