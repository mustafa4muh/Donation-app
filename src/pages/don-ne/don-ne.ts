import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorageReference , AngularFireStorage , AngularFireUploadTask} from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';


/**
 * Generated class for the DonNePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-don-ne',
  templateUrl: 'don-ne.html',
})
export class DonNePage {
  donaNedData={
    name: "",
    plase: "",
    phoneNumber:Number,
    img:"",
    date:""
  }
  imageUrl:string="";
  ref:AngularFireStorageReference;
   task: AngularFireUploadTask;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db: AngularFireDatabase, public auth : AngularFireAuth ,private alertCtrl: AlertController, public afstorge:AngularFireStorage) {
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
    const id = Math.random().toString(36).substr(2);
    this.ref = this.afstorge.ref("needs/"+id) ;
    this.task = this.ref.put(event.target.files[0]);
    this.donaNedData.img= id;
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
  saveData(donaNedData){


    var y = new Date().getFullYear();
    var m = new Date().getMonth()+1;
    var d = new Date().getDate();
    
    var dateNow=y+"/"+m+"/"+d; 
    this.donaNedData.date=dateNow;


    this.db.list('donaNedData').push(donaNedData).then(()=>{
      this.presentAlert();
      this.navCtrl.setRoot(HomePage);
    })
    .catch(error=>{
      document.getElementById("error").style.display = "block";
      document.getElementById("error").style.textAlign = "center";
      document.getElementById("error").innerText = "هناك خطأ";
    }
     )
  
    }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DonNePage');
  }
  
          baCk(){
            this.navCtrl.pop();
          }


                
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'شكرا لك',
      subTitle: 'تم نشر حاجتك ومن يطلبها سيتصل بك',
      buttons: ['اغلاق']
    });
    alert.present();
  }

}

