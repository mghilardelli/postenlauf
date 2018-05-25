import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RanglistePage } from './rangliste';

@NgModule({
  declarations: [
    RanglistePage,
  ],
  imports: [
    IonicPageModule.forChild(RanglistePage),
  ],
})
export class RanglistePageModule {}
