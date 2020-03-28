import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoginPage } from '../login/login';

/**
 * Generated class for the DongetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donget',
  templateUrl: 'donget.html',
})
export class DongetPage {
  looosos=[];
  //public navCtrl: NavController, public navParams: NavParams
  constructor( public navCtrl: NavController, public alErt:AlertController,public auth:AngularFireAuth ,public navParams: NavParams, public db:AngularFireDatabase) {
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
    this.starkl();
    this.looosos= this.starkl();
    //console.log(this.looosos);
  }

  starkl(){
    var loo=[];
    this.db.database.ref("donaTe/").on("value",function (snapshot){
      snapshot.forEach(x=>{
        let y = x.val();
        y['key'] = x.key;
        loo.push(y);
      })
    })
  return loo;
  }

  baCk(){
    this.navCtrl.pop();
  }
  removeop(key){
this.presentConfirm(key)

  }




  presentConfirm(key) {
    let alert = this.alErt.create({
      title: 'حذف التبرع',
      message: 'هل تريد حذف التبرع؟',
      buttons: [
        {
          text: 'لا',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'نعم',
          handler: () => {
            //console.log(key);
            this.db.database.ref("donaTe/"+key).remove().then(()=>{
              this.navCtrl.pop();
            });
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DongetPage');
  }

}
