import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the NedInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ned-info',
  templateUrl: 'ned-info.html',
})
export class NedInfoPage {
  las:Array<any>=[];
  id:any;
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
    this.id=this.navParams.get('id');
    //console.log(this.id);
    this.loas(this.id);
    this.las = this.loas(this.id);
    console.log(this.las)
  }

  loas(k){
    var fds =[];
    this.db.database.ref("donaNedData").on("value",function(sla){

sla.forEach(a=>{
  if(k == a.key){
    let y =a.val();
    y["key"] =a.key;

    var reeff = firebase.storage().ref('needs/'+y['img'])
    reeff.getDownloadURL().then(function (url){
    y["imgUrl"] = url;
    }).then(()=>{

    fds['date'] = y['date'];
    fds['name'] = y['name'];
    fds['img'] = y['img'];
    fds['phoneNumber'] = y['phoneNumber'];
    fds['plase'] = y['plase'];
    fds['imgUrl'] = y['imgUrl'];
    })
  }
})

    })
    return fds;
  }
  baCk(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
  //  console.log('ionViewDidLoad NedInfoPage');
  }

}



  