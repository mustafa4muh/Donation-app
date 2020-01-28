import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonNePage } from './don-ne';

@NgModule({
  declarations: [
    DonNePage,
  ],
  imports: [
    IonicPageModule.forChild(DonNePage),
  ],
})
export class DonNePageModule {}
