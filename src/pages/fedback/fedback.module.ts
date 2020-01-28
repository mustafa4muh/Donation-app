import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FedbackPage } from './fedback';

@NgModule({
  declarations: [
    FedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(FedbackPage),
  ],
})
export class FedbackPageModule {}
