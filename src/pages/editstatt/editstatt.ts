import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the EditstattPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editstatt',
  templateUrl: 'editstatt.html',
})
export class EditstattPage {
 
  det:object={
    provice:" ",
    area:" ",
    nufampo:" ",
    nupers:" ",
    numchill:" ",
    numwemo:" ",
    nuwemowithout:" ",
    key:""  
  }
  
  

  constructor(public navCtrl: NavController, public auth: AngularFireAuth ,public navParams: NavParams, public db:AngularFireDatabase) {
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
    this.ools();
    this.det = this.ools();
}


ools(){
  var det={
    provice:"",
    area:"",
    nufampo:"",
    nupers:"",
    numchill:"",
    numwemo:"",
    nuwemowithout:"",
    key:""
  }

  this.db.database.ref("statstic/").on("value",function(snap){
    snap.forEach(y=>{
      let a = y.val();
      det.provice = a["provice"];
      det.area = a["area"];
      det.nufampo = a["nufampo"];
      det.nupers = a["nupers"];
      det.numchill = a["numchill"];
      det.numwemo = a["numwemo"];
      det.nuwemowithout = a["nuwemowithout"] ; 
      // console.log(a["provice"])     
      det.key = a.key;
    })
 
  })

  return det; 
}



  savedata(det)
  {
this.db.database.ref("statstic/"+det.key ).set( {
  provice:det.provice,
  area:det.area,
  nufampo:det.nufampo,
  nupers:det.nupers,
  numchill:det.numchill,
  numwemo:det.numwemo,
  nuwemowithout:det.nuwemowithout
})
.then(()=>this.navCtrl.push(HomePage)).catch(()=>this.navCtrl.pop());
  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad EditstattPage');
  }


  baCk(){
    this.navCtrl.pop();
  }

}
