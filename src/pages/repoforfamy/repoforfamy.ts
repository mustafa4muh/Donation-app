import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the RepoforfamyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repoforfamy',
  templateUrl: 'repoforfamy.html',
})
export class RepoforfamyPage {
looosos=[];
  constructor(public navCtrl: NavController, public alErt:AlertController,public auth:AngularFireAuth ,public navParams: NavParams, public db:AngularFireDatabase) {
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
  }

  starkl(){
    var loo=[];
    this.db.database.ref("poorFam/").on("value",function (snapshot){
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
      title: 'حذف العائلة',
      message: 'هل تريج حذف العائلة؟',
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
            this.db.database.ref("poorFam/"+key).remove().then(()=>{
              this.navCtrl.pop();
            });
          }
        }
      ]
    });
    alert.present();
  }
  



  ionViewDidLoad() {
    //console.log('ionViewDidLoad RepoforfamyPage');
  }

}
