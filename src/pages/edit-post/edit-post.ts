import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ModelllPage } from './../modelll/modelll';

import { AngularFireDatabase } from '@angular/fire/database'
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';


/**
 * Generated class for the EditPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-post',
  templateUrl: 'edit-post.html',
})
export class EditPostPage {
  data=[];
  constructor(public navCtrl: NavController, public auth : AngularFireAuth , public navParams: NavParams,public db :AngularFireDatabase,public modalCtrl: ModalController) {
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
    this.actsahj();
    this.data =this.actsahj();
  }

actsahj(){
  var postts =[];
  this.db.database.ref("post/").on("value",function (snapshot){
    snapshot.forEach(a=>{
      let y =a.val();
      y["key"] =a.key;
    postts.push(y);
    })
  })
return postts;
}

  presentModal1(key) {
    var data={
   key:key
    }
    const modal = this.modalCtrl.create(ModelllPage, { data: data});
    modal.present();
  }
  baCk(){
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad EditPostPage');
  }

}




