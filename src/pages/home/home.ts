import { Component } from '@angular/core';
import { NavController,MenuController,LoadingController, AlertController } from 'ionic-angular';
import { PostInfoPage } from '../post-info/post-info';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage,AngularFireStorageReference } from '@angular/fire/storage';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
pOST:Array<any>;
ref:AngularFireStorageReference;
x:number;
  constructor(public alertCtrl:AlertController ,public menuCont:MenuController ,public navCtrl: NavController,private db:AngularFireDatabase, public Stg:AngularFireStorage,public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      spinner: 'hide',
      content: "Please wait..."
    })
    loader.present();

  
    this.x=1;
    this.menuCont.open("asasasa");
    this.ooppeenn();
   this.pOST =  this.ooppeenn().reverse();
   if(this.pOST != null){
     setTimeout(()=>{loader.dismiss();},3000)
   
  }else{
    this.errorrdataa();
  }
  }
ooppeenn(){

    
  var postar= [ ];

  //this.postar=[];
  // var reeff = firebase.storage().ref('file-uploads1.png')
  // reeff.getDownloadURL().then(function (url){
  //   console.log(url)
  // })
  

  this.db.database.ref("post/")
  .on("value",function (snapshot){
 //console.log(snapshot.val())
   

   snapshot.forEach(a=>{
     let y =a.val();
     y["key"] =a.key;
 
     var reeff = firebase.storage().ref('post/'+y['img'])
     reeff.getDownloadURL().then(function (url){
     y["imgUrl"] = url;
     }).then(()=>{
      postar.push(y as PostInn);
    })
     //n=postar.length-1;  
 // this.postar.push(this.post);
 // this.postar.push(y as Post);
   })
   // console.log(y.img);
 //console.log(n);  
   //console.log(n);
   //console.log("load data");

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
jkjk(){
}

  openInf(id){
    this.navCtrl.push(PostInfoPage,{id:id});
    
  }


  //loading>>>...
  presentLoading() {
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
  
  }

  errorrdataa(){
    let alert = this.alertCtrl.create({
      title: 'Error Conect',
      subTitle: 'Error in load data, please close app.',
      buttons: ['Ok']
    });
    alert.present();
  }


}
export class PostInn{
key:'';
address:'';
date:'';
detils:'';
img:'';
imgUrl:'';
}



