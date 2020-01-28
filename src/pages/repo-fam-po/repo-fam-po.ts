import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database'

/**
 * Generated class for the RepoFamPoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
  import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';

@IonicPage()
@Component({
  selector: 'page-repo-fam-po',
  templateUrl: 'repo-fam-po.html',
})
export class RepoFamPoPage {
  donaData={
    name: "",
    number:Number,
    plase: "",
    phoneNumber:Number
  }
  constructor(public navCtrl: NavController,public auth : AngularFireAuth,public alertCtrl: AlertController, public navParams: NavParams, private db : AngularFireDatabase) {
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
  saveData(donaData){
    this.db.list('poorFam').push(donaData).then(()=>{
      this.presentAlert1();
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
   // console.log('ionViewDidLoad RepoFamPoPage');
  }
  baCk(){
            this.navCtrl.pop();
          }

          presentAlert1() {
            let alert = this.alertCtrl.create({
              title: 'تم التبليغ',
              subTitle: 'شكرا لك سيتم الاتصال ومتابعة الموضوع قريبا',
              buttons: ['اغلاق']
            });
            alert.present();
          }
}
