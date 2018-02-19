import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConducentePage } from './conducente';

@NgModule({
  declarations: [
    ConducentePage,
  ],
  imports: [
    IonicPageModule.forChild(ConducentePage),
  ],
})
export class ConducentePageModule {}
