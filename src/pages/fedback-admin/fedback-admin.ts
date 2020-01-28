import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FedbacinfoPage } from '../fedbacinfo/fedbacinfo';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage,AngularFireStorageReference } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the FedbackAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fedback-admin',
  templateUrl: 'fedback-admin.html',
})
export class FedbackAdminPage {


pOST:Array<any>;
ref:AngularFireStorageReference;
  constructor(public navCtrl: NavController,public auth : AngularFireAuth ,private db:AngularFireDatabase, public Stg:AngularFireStorage) {
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
    this.ooppeenn();
    this.pOST =  this.ooppeenn();
  }









  ooppeenn(){

    
    var postar= [ ];
  
    //this.postar=[];
    // var reeff = firebase.storage().ref('file-uploads1.png')
    // reeff.getDownloadURL().then(function (url){
    //   console.log(url)
    // })
    
  
    this.db.database.ref("fedback/")
    .on("value",function (snapshot){
   //console.log(snapshot.val())
     
  
     snapshot.forEach(a=>{
       let y =a.val();
       y["key"] =a.key;
   
       var reeff = firebase.storage().ref('problem/'+y['img'])
       reeff.getDownloadURL().then(function (url){
       y["imgUrl"] = url;
       }).then(()=>{
        postar.push(y as ASD);
      })
       //n=postar.length-1;  
   // this.postar.push(this.post);
   // this.postar.push(y as Post);
     })
     // console.log(y.img);
   //console.log(n);  
     //console.log(n);  
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   
   })
       
  // var h=0;
  
  // for (var i =n ; i<=0; i--){
  // this.pOST[h] = postar[i];
  // console.log("1")
  //  h++;
  // }
  
  return postar;
  
  }

  
  openInf(id){
    this.navCtrl.push(FedbacinfoPage,{id:id});
    
  }
  










  baCk(){
    this.navCtrl.pop();
  }



  ionViewDidLoad() {
    //console.log('ionViewDidLoad FedbackAdminPage');
  }

}
export class ASD{
address: '';
detils:';' 
img: ';'
key:'';
}
