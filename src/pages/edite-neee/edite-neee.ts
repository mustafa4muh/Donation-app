import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from 'ionic-angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';


/**
 * Generated class for the EditeNeeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edite-neee',
  templateUrl: 'edite-neee.html',
})
export class EditeNeeePage {
klkl=[];
img ="grol9ly103e";
//ref:AngularFireStorageReference;
  constructor(public stoR:AngularFireStorage, public auth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public db : AngularFireDatabase, public alertCtrl: AlertController) {
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
    this.ghgj();
    this.klkl =this.ghgj();
  }


  ghgj(){
    var gjh =[];
    this.db.database.ref("donaNedData/").on("value",function(snapshot){
      snapshot.forEach(x=>{
        let y =x.val();
        y['key'] =x.key;
        gjh.push(y);
      })
    })
    return gjh;
  }


  presentConfirm(key,img) {
    let alert = this.alertCtrl.create({
      title: 'حذف حاجة معروضة',
      message: 'هل انت متأكد من الحذف ؟',
      buttons: [
        {
          text: 'لا',
          role: 'cancel',
          handler: () => {
            //console.log(key);
          }
        },
        {
          text: 'نعم',
          handler: () => {
            this.db.database.ref("donaNedData/"+key).remove();
            // var storage = firebase.storage;
            // var reff1 = storage.ref()
            // var reff = reff1.child("needs/" + img);
            // reff.delete();
            this.stoR.ref("needs/"+img).delete();
            //console.log(img);
            this.hjhjhj();
            
          }
        }
      ]
    });
    alert.present();
  }

  
  hjhjhj() {
    let alert = this.alertCtrl.create({
      title: 'تم الحذف',
      subTitle: 'تم حذف العنصر ',
      buttons: ['اغلاق']
    });
    alert.present();
  }


  baCk(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
//    console.log('ionViewDidLoad EditeNeeePage');
  }

}
