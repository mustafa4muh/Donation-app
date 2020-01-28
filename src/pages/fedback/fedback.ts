import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireStorage,AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { HomePage } from '../home/home';

import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';


/**
 * Generated class for the FedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fedback',
  templateUrl: 'fedback.html',
})
export class FedbackPage {
det={
  address:'',
  detils:'',
  img:''

}
task:AngularFireUploadTask;
ref:AngularFireStorageReference;

  constructor(public navCtrl: NavController,public auth: AngularFireAuth ,public navParams: NavParams,private alertCtrl: AlertController,public db:AngularFireDatabase,private storag:AngularFireStorage) {
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
  }


  uplode(event){

    const id= Math.random().toString(36).substr(2);
    this.ref = this.storag.ref("problem/"+id);
    this.task = this.ref.put(event.target.files[0]);
    this.det.img= id;
    this.task.snapshotChanges().subscribe((snapshot)=>{
      document.getElementById("bt12").style.display  = "none";
      document.getElementById("wqw12").style.display  = "block";
      
      // if(snapshot.bytesTransferred/snapshot.totalBytes*100==100)
      // {
        
      // }else{
      
      // }
        
      },()=>{
        console.log("error"); 
       },()=>{
        console.log("complete"); 
        document.getElementById("bt12").style.display  = "block";
        document.getElementById("wqw12").style.display  = "none";
        
      
       })
  }

  updata(det){
    this.db.list("fedback").push(det).then(()=>{
      this.presentAlert() ;
      this.navCtrl.push(HomePage)}).catch(()=>this.navCtrl.pop());
  }
  baCk(){
    this.navCtrl.pop();
  }




 
 
  
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'تم ارسال الابلاغ',
      subTitle: 'شكرا لك  لابلاغنا',
      buttons: ['اغلاق']
    });
    alert.present();
  }




  ionViewDidLoad() {
   // console.log('ionViewDidLoad FedbackPage');
  }

}
