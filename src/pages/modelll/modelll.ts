import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database'
import { HomePage } from '../home/home';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the ModelllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modelll',
  templateUrl: 'modelll.html',
})
export class ModelllPage {
  vkey:any;
  det={
    address:"",
    date:"",
    detils:"",
    img:""
  }
  img:any;
  
  constructor(public stoR:AngularFireStorage,public auth:AngularFireAuth ,public navCtrl: NavController, public alertCtrl :AlertController,public navParams: NavParams ,public view : ViewController,public db : AngularFireDatabase) {
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
 this.easax();
 var data = this.easax();
  //console.log(data);
  //console.log(data['key']);
    this.db.database.ref("post/").on("value",(snap)=>{
    snap.forEach(x=>{
      if(x.key == data['key']){
        let y = x.val();
        //y['key'] = x.key;
      this.vkey=x.key;
this.det.address = y['address'];
this.det.date = y['date']; 
this.det.detils = y['detils'];
this.det.img = y['img'];
this.img = y['img'];
//console.log(this.det);
}    
})
  })
  }
  easax(){
    var data = this.navParams.get('data');
    return data;
  }
  dellllet(vkey,img){
    this.stoR.ref("post/"+img).delete();
this.db.database.ref("post/"+vkey).remove().then(()=>{
  this.presentAlert1() 
  this.navCtrl.push(HomePage)}).catch(()=>this.navCtrl.pop());

  }
eXt(){
  this.view.dismiss();
}

saveD(det){

this.db.database.ref("post/"+this.vkey).update(det).then(()=>{
  this.presentAlert2();
  this.navCtrl.push(HomePage)}).catch(()=>this.navCtrl.pop());
}

ionViewDidLoad() {
    //console.log('ionViewDidLoad ModelllPage');
  }
                  
  presentAlert1() {
    let alert = this.alertCtrl.create({
      title: 'تم الحذف',
      subTitle: 'تم حذف البيانات',
      buttons: ['اغلاق']
    });
    alert.present();
  }

  presentAlert2() {
    let alert = this.alertCtrl.create({
      title: 'تم التعديل',
      subTitle: 'تم تحديث البيانات',
      buttons: ['اغلاق']
    });
    alert.present();
  }


}
