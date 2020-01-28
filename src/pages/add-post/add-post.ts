import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';


/**
 * Generated class for the AddPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {
  det={
    address:"",
    detils:"",
    img:"",
    date:""
  }
task:AngularFireUploadTask;
ref:AngularFireStorageReference;


  constructor(public loadingCtrl:LoadingController,public navCtrl: NavController, public auth:AngularFireAuth, public navParams: NavParams,private alertCtrl: AlertController,private db:AngularFireDatabase,private storag:AngularFireStorage) {
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
this.ref = this.storag.ref("post/"+id);
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



  // let loader = this.loadingCtrl.create({
  //   spinner: 'hide',
  //   content: "Please wait..."
  // });
  // loader.present();
  // setTimeout(asdf => {
  //   if(this.x==0){
  //   loader.dismiss();}
  //   else {return this.presentLoading()}
  // }, 5000);





// this.task.on('state_changed', function(snapshot){
//   // Observe state change events such as progress, pause, and resume
//   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//   console.log('Upload is ' + progress + '% done');
//   switch (snapshot.state) {
//     case firebase.storage.TaskState.PAUSED: // or 'paused'
//       console.log('Upload is paused');
//       break;
//     case firebase.storage.TaskState.RUNNING: // or 'running'
//       console.log('Upload is running');
//       break;
//   }
// }, function(error) {
//   // Handle unsuccessful uploads
// }, function() {
//   // Handle successful uploads on complete
//   // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//   uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
//     console.log('File available at', downloadURL);
//   });
// });
    
  }
  savedata(det){
    var y = new Date().getFullYear();
    var m = new Date().getMonth()+1;
    var d = new Date().getDate();
    
    var dateNow=y+"/"+m+"/"+d; 
    this.det.date=dateNow;
this.db.list("post").push(det).then(()=>{
  this.presentAlert();
  this.navCtrl.push(HomePage)}).catch(()=>this.navCtrl.pop());
  }
  ionViewDidLoad() {
    
  }

  
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'تم اضافة منشور',
      subTitle: 'تم رفع المنشور ',
      buttons: ['اغلاق']
    });
    alert.present();
  }

  presenerrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'حصل خطأ لم يتم التحميل ',
      buttons: ['اغلاق']
    });
    alert.present();
  }
  baCk(){
    this.navCtrl.pop();
  }

}
