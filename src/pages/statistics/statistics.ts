import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  det:object={
    provice:" ",
    area:" ",
    nufampo:" ",
    nupers:" ",
    numchill:" ",
    numwemo:" ",
    nuwemowithout:" "
  }
 
  

  
  constructor(public navCtrl: NavController, public navParams: NavParams ,public db : AngularFireDatabase) {
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
    nuwemowithout:""
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
    
    })
 
  })

  return det; 
}




ionViewDidLoad() {
    //console.log('ionViewDidLoad StatisticsPage');
  }
  
          baCk(){
            this.navCtrl.pop();
          }

}
