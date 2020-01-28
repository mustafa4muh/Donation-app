import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from '@angular/fire/auth';

import { HomePage } from '../pages/home/home';
import { DonatePage } from '../pages/donate/donate';
import { RepoFamPoPage } from '../pages/repo-fam-po/repo-fam-po';
import { NeArAvPage } from '../pages/ne-ar-av/ne-ar-av';
import { DonNePage } from '../pages/don-ne/don-ne';
import { StatisticsPage } from '../pages/statistics/statistics';
import { PostInfoPage } from '../pages/post-info/post-info';
import { NedInfoPage } from '../pages/ned-info/ned-info';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';
import { FedbackPage } from '../pages/fedback/fedback';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  seco:number=0;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen , public auth:AngularFireAuth, public alertCtrl:AlertController) {

     setTimeout(() => {
 
 this.menuOpened();      
   }, 3000);

    // var user = this.auth.auth.currentUser
//    console.log(user.displayName)
    
  //  this.klklk();
    //var sts = this.klklk();
    //console.log(sts)

    
    // if(sts == "admin"){
    //   this.seco==1;
    // }else if(sts=="unadmin"){
    //   this.seco=2;
    // }else{
    //   this.seco=0;
    // }
    // console.log(this.seco)
   
    // console.log(this.seco)
    
     //var username = 
     
     


//     var username = this.auth.auth.currentUser.displayName;
// console.log(username);
//    if (username=="admin" || username =="unadmin")
//    {
//      this.seco= 1;
// console.log( this.seco);
//    }else{
//      this.seco=0;
//      console.log( this.seco);
//     }

    //    var user = this.auth.auth.currentUser;
//     if (user) {
//       if(user.displayName=="admin"){
// console.log(user.displayName)
//       }
// console.log(user.displayName)

//   //    User is signed in.
//       admm = user.displayName;
//        console.log(admm);
//     } else {
//     //  No user is signed in.
//        admm = "unadmin";
//       console.log(admm);
//     }


    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },//0
      { title: 'Donate', component: DonatePage },//1
      { title: 'RepoFamPo', component: RepoFamPoPage },//2
      { title: 'DonNe', component: DonNePage },//3
      { title: 'NeArAv', component: NeArAvPage },//4
      { title: 'Statistics', component: StatisticsPage },//5
      { title: 'PostInfo', component: PostInfoPage },//6
      { title: 'NedInfo', component: NedInfoPage },//7
      { title: 'About', component: AboutPage },//8
      { title: 'Login', component: LoginPage },//9
      { title: 'Setting', component: SettingPage },//10
      { title: 'fedback', component: FedbackPage },//11
      
      

    ];

  }

klklk(){
  //var klk ;
  //this.auth.auth.currentUser.displayName
    //this.auth.authState.subscribe(user=>{
   //klk = this.auth.auth.currentUser.displayName;

  // console.log(this.auth.auth.currentUser.displayName)
   //klk = user.displayName;
 // })
   //return klk;
}


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    this.nav.push(page.component);
  }

  openPageSet(page){
    var user = this.auth.auth.currentUser;
    if(user){
if (user.displayName == "admin"){
    this.nav.push(page.component);
  }else{
this.prntAlert();
this.nav.setRoot(HomePage);
  }
    }else{
this.prntAlert();
this.nav.setRoot(HomePage);

}


  }




  // ionViewDidLoad() {
  //   // Put here the code you want to execute

  //   var userlog = this.auth.auth.currentUser;

  //   console.log(userlog)
  //   if(userlog){
  //     this.seco = 1;
  //     console.log(userlog)

  //   }
  //   else {
  //     this.seco = 0;
  //     console.log(userlog)

  //   }


  // }




  prntAlert() {
    let alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'يجب تسجيل الدخول بصفة مسؤول',
      buttons: ['اغلاق']
    });
    alert.present();
  }

  menuOpened(){
  var assa = this.auth.auth.currentUser;
  if(assa){
  this.seco=1;
}else{
this.seco=0;
}
}

  Logout(){
this.auth.auth.signOut().then(()=>{
  this.seco=0;
});
this.nav.setRoot(HomePage);
  
}
}
