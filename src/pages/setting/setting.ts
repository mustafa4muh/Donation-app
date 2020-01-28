import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddPostPage } from '../add-post/add-post';
import { EditPostPage } from '../edit-post/edit-post';
import { EditeNeeePage } from '../edite-neee/edite-neee';
import { EditstattPage } from '../editstatt/editstatt';
import { RepoforfamyPage } from '../repoforfamy/repoforfamy';
import { FedbackAdminPage } from '../fedback-admin/fedback-admin';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';



/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController,public auth:AngularFireAuth ,public navParams: NavParams) {
    var user = this.auth.auth.currentUser;
    if (user) {
      if(user.displayName!="admin"){
        this.navCtrl.setRoot(HomePage);
      }
      // User is signed in.
     //  admm = user.displayName;
       //console.log(admm);
    } else {
      // No user is signed in.
       //admm = "unadmin";
      //console.log(admm);
      this.navCtrl.setRoot(LoginPage);//not read this error  
    }

    this.pages = [
      { title: 'AddPost', component: AddPostPage },//0
      { title: 'Donate', component: EditPostPage },//1
      { title: 'Statistics', component: RepoforfamyPage },//2
      { title: 'RepoFamPo', component: EditeNeeePage },//3
      { title: 'DonNe', component: EditstattPage },//4
      { title: 'FedbackAdmin', component: FedbackAdminPage },//5
      
    ];
  
  }
  openPage(pages){
this.navCtrl.push(pages.component);
}

  ionViewDidLoad() {
    
  }
  baCk(){
    this.navCtrl.pop();
  }

}







