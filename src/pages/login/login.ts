import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { AngularFireAuth } from '@angular/fire/auth';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  dalo={
    user:"",
    pass: ""
  }
  enablee=0;
  enablee1=1;
  error:string;
  constructor(public navCtrl: NavController,private alertCtrl:AlertController ,public navParams: NavParams, private auth : AngularFireAuth) {
  }
  baCk(){
    this.navCtrl.setRoot(HomePage);
  }

  loginin(dalo){
    this.auth.auth.signInWithEmailAndPassword(dalo.user,dalo.pass).then(()=>{
      this.navCtrl.setRoot(HomePage);
    }).catch(error=>{
      this.error = error;
      this.esresraer();
    })
  }

  
  esresraer() {
    let alert = this.alertCtrl.create({
      title: 'لم يتم تسجيل الدخول',
      subTitle: this.error,
      buttons: ['اغلاق']
    });
    alert.present();
  }

  openSignUp(){
    this.navCtrl.push(SignupPage);
  }
  ionViewDidLoad() {
  
  }

}
