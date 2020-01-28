import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';


/**
 * Generated class for the FedbacinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fedbacinfo',
  templateUrl: 'fedbacinfo.html',
})
export class FedbacinfoPage {
  aliam:Array<any>;
id:any;
  constructor(public navCtrl: NavController, public auth:AngularFireAuth , private stoR :AngularFireStorage ,private alertCtrl: AlertController, public navParams: NavParams, public db:AngularFireDatabase) {
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
    this.id=this.navParams.get('id');
    this.oppp(this.id);
    //console.log(this.oppp(this.id))
      this.aliam = this.oppp(this.id);
  //console.log(this.aliam)
  }



  oppp(k){
    var amar = [];
    this.db.database.ref("fedback/").on("value",function(snap){
      snap.forEach(a=>{
  if (k == a.key){      
        let y =a.val();
        y["key"] =a.key;

        var reeff = firebase.storage().ref('problem/'+y['img'])
        reeff.getDownloadURL().then(function (url){
        y["imgUrl"] = url;
        }).then(()=>{
         amar['imgUrl'] = y['imgUrl'];
         //amar['key'] = y['key'];
         amar['address'] = y['address'];
         amar['detils'] = y['detils'];         
         amar['img'] = y['img'];
         
       })
  }
  })
    })
    
    return amar;
  }

  dellllet(immmg){
    let alert = this.alertCtrl.create({
      title: 'حذف حاجة معروضة',
      message: 'هل انت متأكد من الحذف ؟',
      buttons: [
        {
          text: 'لا',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'نعم',
          handler: () => {
            this.stoR.ref("problem/"+immmg).delete();
            this.db.database.ref("fedback/"+this.id).remove().then(()=>{
              this.navCtrl.setRoot(HomePage);}
            );

          }
        }
      ]
    });
    alert.present();
  }





  ionViewDidLoad() {
    //console.log('ionViewDidLoad FedbacinfoPage');
  }
  baCk(){
    this.navCtrl.pop();
  }

}
