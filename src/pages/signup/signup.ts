import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  dalo={
    
    email:"",
 
    pass: ""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private authh:AngularFireAuth) {
  }
  baCk(){
    this.navCtrl.pop();
  }
  savedata(dalo){
 this.authh.auth.createUserWithEmailAndPassword(dalo.email,dalo.pass).then(()=>{
   this.authh.auth.currentUser.updateProfile({
     displayName: "unadmin",
     photoURL: "https://firebasestorage.googleapis.com/v0/b/donation-f2a8f.appspot.com/o/abstract-user-flat-4.svg?alt=media&token=0bf2d404-b3af-449a-87c1-aa56dd5d22f7",
   })
 })
 this.navCtrl.setRoot(HomePage);
}
 
  
  ionViewDidLoad() {

  }

}
