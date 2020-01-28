import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FedbackAdminPage } from './fedback-admin';

@NgModule({
  declarations: [
    FedbackAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(FedbackAdminPage),
  ],
})
export class FedbackAdminPageModule {}
