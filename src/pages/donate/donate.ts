import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database'
import { HomePage } from '../home/home';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the DonatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class DonatePage {
donaData={
  name: "",
  palse: "",
  phonenumber:Number,
  type:""
}

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, private db: AngularFireDatabase, public auth:AngularFireAuth) {
    //var admm;
    var user = this.auth.auth.currentUser;
      if (user) {
        // User is signed in.
       //  admm = user.displayName;
         //console.log(admm);
      } else {
        // No user is signed in.
         //admm = "unadmin";
        //console.log(admm);
        this.navCtrl.setRoot(LoginPage);//not read this error  
      }
  }

  savedata(donaData){

  this.db.list('donaTe').push(donaData).then(()=>{
    this.presentAlert();
    this.navCtrl.setRoot(HomePage);

  })
  .catch(error=>{
    document.getElementById("error").style.display = "block";
    document.getElementById("error").style.textAlign = "center";
    document.getElementById("error").innerText = "هناك خطأ";
  }
    )

  }
  ionViewDidLoad() {
   // console.log('ionViewDidLoad DonatePage');
  }
  
          baCk(){
            this.navCtrl.pop();
          }


          
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'شكرا لك',
      subTitle: 'سيتم الاتصال بك قريبا',
      buttons: ['اغلاق']
    });
    alert.present();
  }

}
