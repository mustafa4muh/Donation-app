import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NedInfoPage } from '../ned-info/ned-info';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the NeArAvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ne-ar-av',
  templateUrl: 'ne-ar-av.html',
})
export class NeArAvPage {
loaaq:Array<any>=[];
  constructor(public navCtrl: NavController,public auth:AngularFireAuth ,public navParams: NavParams,public db:AngularFireDatabase) {
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
    this.loaddd();

    //console.log(this.loaddd())
    this.loaaq = this.loaddd();
    //console.log(this.loaaq)

  }

  loaddd(){
    var loa = [];
    this.db.database.ref("donaNedData/").on("value",function(snap){
      snap.forEach(a=>{
        let u = a.val();
        u['key'] = a.key;
        var refobase = firebase.storage().ref('needs/'+u['img'])
        refobase.getDownloadURL().then(function (url){
          u["imgUrl"] = url;
          }).then(()=>{
            loa.push(u as Oia);
            // console.log(loa)
          })
      
      })
    })
    return loa ;
  }
  openInf_ned(iql){
  this.navCtrl.push(NedInfoPage,{id:iql});
}
  ionViewDidLoad() {
   // console.log('ionViewDidLoad NeArAvPage');
  }
          baCk(){
            this.navCtrl.pop();
          }

}
export class Oia{
key:'';
img: '';
name: '';
phoneNumber: '';
plase: '';
}