import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NedInfoPage } from './ned-info';

@NgModule({
  declarations: [
    NedInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(NedInfoPage),
  ],
})
export class NedInfoPageModule {}
