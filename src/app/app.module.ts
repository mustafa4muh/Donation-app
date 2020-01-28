import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DonatePage } from '../pages/donate/donate';
import { RepoFamPoPage } from '../pages/repo-fam-po/repo-fam-po';
import { NeArAvPage } from '../pages/ne-ar-av/ne-ar-av';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DonNePage } from '../pages/don-ne/don-ne';
import { StatisticsPage } from '../pages/statistics/statistics';
import { PostInfoPage } from '../pages/post-info/post-info';
import { NedInfoPage } from '../pages/ned-info/ned-info';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SettingPage } from '../pages/setting/setting';
import { AddPostPage } from '../pages/add-post/add-post';
import { EditPostPage } from '../pages/edit-post/edit-post';
import { EditeNeeePage } from '../pages/edite-neee/edite-neee';
import { EditstattPage } from '../pages/editstatt/editstatt';
import { RepoforfamyPage } from '../pages/repoforfamy/repoforfamy';
import { ModelllPage } from '../pages/modelll/modelll';
import { FedbackPage } from '../pages/fedback/fedback';
import { FedbackAdminPage } from '../pages/fedback-admin/fedback-admin';
import { FedbacinfoPage } from '../pages/fedbacinfo/fedbacinfo';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';




export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDwSYUEJDyATl-rVUqrTa-7JANA3NsCCNA",
    authDomain: "donation-f2a8f.firebaseapp.com",
    databaseURL: "https://donation-f2a8f.firebaseio.com",
    projectId: "donation-f2a8f",
    storageBucket: "donation-f2a8f.appspot.com",
    messagingSenderId: "1092563031897"
  }
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DonatePage,
    RepoFamPoPage,
    NeArAvPage,
    DonNePage,
    StatisticsPage,
    PostInfoPage,
    NedInfoPage,
    AboutPage ,
    LoginPage,
    SignupPage,
    SettingPage,
    AddPostPage ,
    EditPostPage,
    EditeNeeePage,
    EditstattPage ,
    RepoforfamyPage,
    ModelllPage,
    FedbackPage,
    FedbackAdminPage,
    FedbacinfoPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),  
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DonatePage,
    RepoFamPoPage,
    NeArAvPage,
    DonNePage,
    StatisticsPage,
    PostInfoPage,
    NedInfoPage,
    AboutPage,
    LoginPage,
    SignupPage,
    SettingPage,
    AddPostPage ,    
    EditPostPage,
    EditeNeeePage,
    EditstattPage ,
    RepoforfamyPage,
    ModelllPage,
    FedbackPage,
    FedbackAdminPage,
    FedbacinfoPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
