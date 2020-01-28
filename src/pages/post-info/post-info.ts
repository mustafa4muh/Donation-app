import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the PostInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-info',
  templateUrl: 'post-info.html',
})
export class PostInfoPage {
  aliam:Array<any>;
id:any;
  constructor(public navCtrl: NavController,public auth:AngularFireAuth, public navParams: NavParams, public db:AngularFireDatabase) {
    this.id=this.navParams.get('id');
    this.oppp(this.id);
    //console.log(this.oppp(this.id))
      this.aliam = this.oppp(this.id);
  //console.log(this.aliam)
    }

  oppp(k){
    var amar = [];
    this.db.database.ref("post/").on("value",function(snap){
      snap.forEach(a=>{
  if (k == a.key){      
        let y =a.val();
        y["key"] =a.key;

        var reeff = firebase.storage().ref('post/'+y['img'])
        reeff.getDownloadURL().then(function (url){
        y["imgUrl"] = url;
        }).then(()=>{
         amar['imgUrl'] = y['imgUrl'];
         //amar['key'] = y['key'];
         amar['address'] = y['address'];
         amar['date'] = y['date'];
         amar['detils'] = y['detils'];
         amar['img'] = y['img'];
       })
  }
  })
    })
    
    return amar;
  }

  baCk(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PostInfoPage');
  }

}
