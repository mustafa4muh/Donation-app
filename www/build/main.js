webpackJsonp([20],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PostInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostInfoPage = /** @class */ (function () {
    function PostInfoPage(navCtrl, auth, navParams, db) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.db = db;
        this.id = this.navParams.get('id');
        this.oppp(this.id);
        //console.log(this.oppp(this.id))
        this.aliam = this.oppp(this.id);
        //console.log(this.aliam)
    }
    PostInfoPage.prototype.oppp = function (k) {
        var amar = [];
        this.db.database.ref("post/").on("value", function (snap) {
            snap.forEach(function (a) {
                if (k == a.key) {
                    var y_1 = a.val();
                    y_1["key"] = a.key;
                    var reeff = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"]().ref('post/' + y_1['img']);
                    reeff.getDownloadURL().then(function (url) {
                        y_1["imgUrl"] = url;
                    }).then(function () {
                        amar['imgUrl'] = y_1['imgUrl'];
                        //amar['key'] = y['key'];
                        amar['address'] = y_1['address'];
                        amar['date'] = y_1['date'];
                        amar['detils'] = y_1['detils'];
                        amar['img'] = y_1['img'];
                    });
                }
            });
        });
        return amar;
    };
    PostInfoPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    PostInfoPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad PostInfoPage');
    };
    PostInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-info',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\post-info\post-info.html"*/'<ion-header style="display: none">\n  <ion-navbar>\n\n\n    \n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div style=" background-color: #151538;  height: 200px; width:100%" >\n\n  <div padding style="padding-bottom: 0%">\n  <table style="width: 100%;" >\n    <tr ><td style="width: 50%">\n    \n      <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n    \n    </td><td>\n            <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n          \n      \n      </td>\n      </tr>\n      </table></div><br>\n<div style="text-align: center;">   \n      <div style="background-image:url(../assets/imgs/22121.png);height: 164px;background-size: cover;width: 100%">  \n        <a class="ti_ce">التفاصيل</a></div>\n</div>\n    </div>\n<div padding  >\n  <div class="di_pos" ><img src="{{aliam[\'imgUrl\']}}" /><ion-item><ion-label>{{aliam[\'date\']}} : <a style="color:black">{{aliam[\'address\']}}</a></ion-label></ion-item>\n<p>\n  {{aliam[\'detils\']}}\n</p></div>        \n</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\post-info\post-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], PostInfoPage);
    return PostInfoPage;
}());

//# sourceMappingURL=post-info.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NedInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the NedInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NedInfoPage = /** @class */ (function () {
    function NedInfoPage(navCtrl, auth, navParams, db) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.db = db;
        this.las = [];
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]); //not read this error  
        }
        this.id = this.navParams.get('id');
        //console.log(this.id);
        this.loas(this.id);
        this.las = this.loas(this.id);
        console.log(this.las);
    }
    NedInfoPage.prototype.loas = function (k) {
        var fds = [];
        this.db.database.ref("donaNedData").on("value", function (sla) {
            sla.forEach(function (a) {
                if (k == a.key) {
                    var y_1 = a.val();
                    y_1["key"] = a.key;
                    var reeff = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"]().ref('needs/' + y_1['img']);
                    reeff.getDownloadURL().then(function (url) {
                        y_1["imgUrl"] = url;
                    }).then(function () {
                        fds['date'] = y_1['date'];
                        fds['name'] = y_1['name'];
                        fds['img'] = y_1['img'];
                        fds['phoneNumber'] = y_1['phoneNumber'];
                        fds['plase'] = y_1['plase'];
                        fds['imgUrl'] = y_1['imgUrl'];
                    });
                }
            });
        });
        return fds;
    };
    NedInfoPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    NedInfoPage.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad NedInfoPage');
    };
    NedInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ned-info',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\ned-info\ned-info.html"*/'<ion-header style="display: none">\n    <ion-navbar>\n  \n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n  <div style=" background-color: #151538;  height: 200px; width:100%" >\n  \n    <div padding style="padding-bottom: 0%">\n    <table style="width: 100%;" >\n      <tr ><td style="width: 50%">\n      \n        <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n      \n      </td><td>\n              <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n            \n        \n        </td>\n        </tr>\n        </table></div><br>\n  <div style="text-align: center;">   \n        <div style="background-image:url(../assets/imgs/22121.png);height: 164px;background-size: cover;width: 100%">  \n          <a class="ti_ce">حاجة متوفرة للمحتاجين</a></div>\n  </div>\n      </div>\n  <div padding>\n    <div>\n    <div class="di_pos" ><img src="{{las[\'imgUrl\']}}"/><ion-item></ion-item>\n      <ion-item><ion-label>أسم الحاجة : <a style="color:black">{{las[\'name\']}}</a></ion-label></ion-item>\n      <ion-item><ion-label>مكان التبرع : <a style="color:black">{{las[\'plase\']}}</a></ion-label></ion-item>\n      <ion-item><ion-label>رقم الهاتف : <a style="color:black">{{las[\'phoneNumber\']}}</a></ion-label></ion-item>\n      <ion-item><ion-label>تاريخ التبرع : <a style="color:black">{{las[\'date\']}}</a></ion-label></ion-item>\n    </div>        \n  </div>\n</div>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\ned-info\ned-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], NedInfoPage);
    return NedInfoPage;
}());

//# sourceMappingURL=ned-info.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, alertCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.dalo = {
            user: "",
            pass: ""
        };
        this.enablee = 0;
        this.enablee1 = 1;
    }
    LoginPage.prototype.baCk = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.loginin = function (dalo) {
        var _this = this;
        this.auth.auth.signInWithEmailAndPassword(dalo.user, dalo.pass).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }).catch(function (error) {
            _this.error = error;
            _this.esresraer();
        });
    };
    LoginPage.prototype.esresraer = function () {
        var alert = this.alertCtrl.create({
            title: 'لم يتم تسجيل الدخول',
            subTitle: this.error,
            buttons: ['اغلاق']
        });
        alert.present();
    };
    LoginPage.prototype.openSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\login\login.html"*/'<ion-header style="display: none">\n  <ion-navbar>\n\n    \n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div style=" background-color: #151538;  height: 200px; width:100%" >\n\n  <div padding style="padding-bottom: 0%">\n  <table style="width: 100%;" >\n    <tr ><td style="width: 50%">\n    \n        <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n        \n    </td><td>\n            <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n          \n      \n      </td>\n      </tr>\n      </table></div><br>\n<div style="text-align: center;">   \n      <div style="height: 164px;background-size: cover;width: 100%">  \n        <a class="ti_ce">تسجيل الدخول</a></div>\n</div>\n    </div>\n\n\n\n    <div padding style="text-align: right">\n\n<ion-label class="l_inn">الايميل</ion-label>\n<ion-input class="i_inn" name="user" type="text" placeholder="" [(ngModel)]="dalo.user"></ion-input>\n\n\n<ion-label class="l_inn">كلمة المرور</ion-label>\n<ion-input class="i_inn" name="pass" type="password" placeholder="" [(ngModel)]="dalo.pass"></ion-input>\n\n<button ion-button class="b_inn" (click)=loginin(dalo)>تسجيل الدخول</button>\n<button ion-button class="b_inn" *ngIf="enablee == 0" (click)=openSignUp()>تسجيل جديد</button>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\about\about.html"*/'<ion-header style="display: none">\n    <ion-navbar>\n  \n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n  <div style="background-image: url(../../assets/imgs/ds.png); background-color: #151538;  height: 200px; width:100%" >\n\n    <div padding style="padding-bottom: 0%">\n    <table style="width: 100%;" >\n      <tr ><td style="width: 50%">\n      \n          <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n          \n      </td><td>\n              <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n            \n        \n        </td>\n        </tr>\n        </table></div><br>\n  <div style="text-align: center;">   \n        \n          <img src="../../assets/imgs/hkd.png"  alt="Code for Iraq" style="border:3px solid #151538;border-radius:50%;width:200px">\n          <div style="width: 100%">  \n              <a class="ti_ce" style="color:black">عن مبرمجي التطبيق</a></div>\n</div>\n      </div>\n<br>\n<br>\n<br>\n<br>\n      <div padding style="text-align: right">\n<P style="text-align: center">\n  التطبيق مبرمج من قبل البرمجة من اجل العراق (code for iraq) وهي مبادرة إنسانية غير ربحية تهدف الى خدمة المجتمع عن طريق البرمجة Programming. تعتبر "Code For IRAQ" مبادرة تعليمية حقيقية ترعى المهتمين بتعلم تصميم وبرمجة تطبيقات الهاتف الجوال ومواقع الانترنت وبرامج الحاسوب والشبكات والاتصالات ونظم تشغيل الحاسوب باستخدام التقنيات مفتوحة المصدر Open Source ، كما توفر لهم جميع الدروس التعليمية اللازمة وبشكل مجاني تماماً ، حيث يتسنى لطالب العلم أن يكتسب الخبرة العملية أثناء وبعد فترة الدراسة وذلك ليسهل عليه ايجاد الوظيفة وبشكل سريع بعد التخرّج وتهدف هذه المبادرة الى تحويل المجتمع من مجتمع سلبي مستهلك الى مجتمع ايجابي منتج يعتمد بالدرجة الاساس على استثمار العقول والخبرات والمهارات بغض النظر عن العمر او التخصص بل الاهم من ذلك تعتمد على مبدأ المواطنة والمشاركة الفاعلة في تأسيس وبناء المجتمع تدعو هذه المبادرة جميع الطلبة والخريجين والهواة والأساتذة الجامعيين والمهتمين مجال البرمجة وتقنيات المعلومات وكذلك الاختصاصات الاخرى الى التطوع والمشاركة الفعلية لأجل الارتقاء بواقع البلد ، حيث تعتبر فرصة عظيمة لاكتساب الخبرة والمهارة عن طريق تصميم وتنفيذ برامج وتطبيقات خدمية من شأنها خدمة المواطن وذلك ضمن مجاميع عمل نشطة وفعّالة يتعاون فيها جميع الأفراد كفريق واحد يتبادل الاراء والخبرات ويطرح الافكار لتتم مناقشتها وتطبيقها على أرض الواقع ، كما تفتح المجال لجميع المواطنين العراقيين ومن جميع الاختصاصات إلى المشاركة الفاعلة في هذه المشاريع لرفد الفريق بالخبرات والافكار والاراء والمقترحات التي من شأنها خدمة المجتمع بأفضل ما يمكن. لا يخفى على أحد أن لمثل هذه المبادرات دور رئيسي في تحسين ورفع اقتصاد البلد ، حيث يتم فيها إبراز المقدرة الحقيقية والذكاء الحقيقي للمواطن العراقي مما يساعد على استقطاب الخبرات المحلية وتوظيفها بدلاً عن استيراد الخبرات الاجنبية والتي عادة ما تكون مكلفة جداً للشركات والمؤسسات الحكومية والأهلية وجميع القطاعات العاملة في البلد والتي قد لا تظاهي أحيانا خبرة وكفاءة وإخلاص المواطن العراقي ، كما إن سيطرة الشركات والعمالات الأجنبية على سوق العمل العراقي ساهم في تقليص فرص التوظيف بشكل هائل نتج عنه عدد كبير من الافراد العاطلين عن العمل من ذوي الخبرات والشهادات والاختصاصات المختلفة ، وهنا يأتي دور الجامعات والمؤسسات والشركات العراقية في التثقيف والتطوير والمشاركة في تغيير وتحسين القوة الاقتصادية والعلمية للبلد ورفع مكانته بين البلدان الاخرى.\n</P>\n</div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AddPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPostPage = /** @class */ (function () {
    function AddPostPage(loadingCtrl, navCtrl, auth, navParams, alertCtrl, db, storag) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.storag = storag;
        this.det = {
            address: "",
            detils: "",
            img: "",
            date: ""
        };
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]); //not read this error  
        }
    }
    AddPostPage.prototype.uplode = function (event) {
        var id = Math.random().toString(36).substr(2);
        this.ref = this.storag.ref("post/" + id);
        this.task = this.ref.put(event.target.files[0]);
        this.det.img = id;
        this.task.snapshotChanges().subscribe(function (snapshot) {
            document.getElementById("bt12").style.display = "none";
            document.getElementById("wqw12").style.display = "block";
            // if(snapshot.bytesTransferred/snapshot.totalBytes*100==100)
            // {
            // }else{
            // }
        }, function () {
            console.log("error");
        }, function () {
            console.log("complete");
            document.getElementById("bt12").style.display = "block";
            document.getElementById("wqw12").style.display = "none";
        });
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
    };
    AddPostPage.prototype.savedata = function (det) {
        var _this = this;
        var y = new Date().getFullYear();
        var m = new Date().getMonth() + 1;
        var d = new Date().getDate();
        var dateNow = y + "/" + m + "/" + d;
        this.det.date = dateNow;
        this.db.list("post").push(det).then(function () {
            _this.presentAlert();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }).catch(function () { return _this.navCtrl.pop(); });
    };
    AddPostPage.prototype.ionViewDidLoad = function () {
    };
    AddPostPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'تم اضافة منشور',
            subTitle: 'تم رفع المنشور ',
            buttons: ['اغلاق']
        });
        alert.present();
    };
    AddPostPage.prototype.presenerrorAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'خطأ',
            subTitle: 'حصل خطأ لم يتم التحميل ',
            buttons: ['اغلاق']
        });
        alert.present();
    };
    AddPostPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    AddPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-post',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\add-post\add-post.html"*/'<ion-header style="display: none">\n  <ion-navbar>\n\n    \n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div style=" background-color: #151538;  height: 200px; width:100%" >\n\n  <div padding style="padding-bottom: 0%">\n  <table style="width: 100%;" >\n    <tr ><td style="width: 50%">\n    \n        <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n        \n    </td><td>\n            <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n          \n      \n      </td>\n      </tr>\n      </table></div><br>\n<div style="text-align: center;">   \n      <div style="height: 164px;background-size: cover;width: 100%">  \n        <a class="ti_ce">اضافة منشور</a></div>\n</div>\n    </div>\n\n\n\n    <div padding style="text-align: right">\n\n<ion-label class="l_inn">العنوان</ion-label>\n<ion-input class="i_inn" name="address" type="text" placeholder="" [(ngModel)]="det.address"></ion-input>\n\n\n<ion-label class="l_inn">التفاصيل</ion-label>\n<ion-input class="i_inn" name="detils" type="textarea" placeholder="" [(ngModel)]="det.detils"></ion-input>\n\n<ion-label class="l_inn">صورة المنشور</ion-label>\n<!-- <ion-input class="i_inn" type="File" placeholder="" (Change)=uplode(event)></ion-input> -->\n<ion-card class="i_inn"><input type="file" accept="image/*" multiple #mulupload (change)="uplode($event)" placeholder="upload a from web file"/></ion-card>\n\n<button id="bt12" ion-button class="b_inn" (click)=savedata(det)>نشر</button>\n\n<ion-label class="l_inn" id="wqw12" style="text-align: center;display: none;">جاري التحميل يرجى الانتظار</ion-label>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\add-post\add-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_storage__["a" /* AngularFireStorage */]])
    ], AddPostPage);
    return AddPostPage;
}());

//# sourceMappingURL=add-post.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, authh) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authh = authh;
        this.dalo = {
            email: "",
            pass: ""
        };
    }
    SignupPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.savedata = function (dalo) {
        var _this = this;
        this.authh.auth.createUserWithEmailAndPassword(dalo.email, dalo.pass).then(function () {
            _this.authh.auth.currentUser.updateProfile({
                displayName: "unadmin",
                photoURL: "https://firebasestorage.googleapis.com/v0/b/donation-f2a8f.appspot.com/o/abstract-user-flat-4.svg?alt=media&token=0bf2d404-b3af-449a-87c1-aa56dd5d22f7",
            });
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.ionViewDidLoad = function () {
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\signup\signup.html"*/'<ion-header style="display: none">\n  <ion-navbar>\n\n    \n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div style=" background-color: #151538;  height: 200px; width:100%" >\n\n  <div padding style="padding-bottom: 0%">\n  <table style="width: 100%;" >\n    <tr ><td style="width: 50%">\n    \n        <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n        \n    </td><td>\n            <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n          \n      \n      </td>\n      </tr>\n      </table></div><br>\n<div style="text-align: center;">   \n      <div style="height: 164px;background-size: cover;width: 100%">  \n        <a class="ti_ce">التسجيل</a></div>\n</div>\n    </div>\n\n\n\n    <div padding style="text-align: right">\n\n\n\n<ion-label class="l_inn">الايميل</ion-label>\n<ion-input class="i_inn" name="user" type="email" placeholder="" [(ngModel)]="dalo.email"></ion-input>\n\n\n<ion-label class="l_inn">كلمة المرور</ion-label>\n<ion-input class="i_inn" name="pass" type="password" placeholder="" [(ngModel)]="dalo.pass"></ion-input>\n\n<button ion-button class="b_inn" (click)=savedata(dalo)>تسجيل </button>\n\n\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonNePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DonNePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonNePage = /** @class */ (function () {
    function DonNePage(navCtrl, navParams, db, auth, alertCtrl, afstorge) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.afstorge = afstorge;
        this.donaNedData = {
            name: "",
            plase: "",
            phoneNumber: Number,
            img: "",
            date: ""
        };
        this.imageUrl = "";
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]); //not read this error  
        }
    }
    DonNePage.prototype.uplode = function (event) {
        var id = Math.random().toString(36).substr(2);
        this.ref = this.afstorge.ref("needs/" + id);
        this.task = this.ref.put(event.target.files[0]);
        this.donaNedData.img = id;
        this.task.snapshotChanges().subscribe(function (snapshot) {
            document.getElementById("bt12").style.display = "none";
            document.getElementById("wqw12").style.display = "block";
            // if(snapshot.bytesTransferred/snapshot.totalBytes*100==100)
            // {
            // }else{
            // }
        }, function () {
            console.log("error");
        }, function () {
            console.log("complete");
            document.getElementById("bt12").style.display = "block";
            document.getElementById("wqw12").style.display = "none";
        });
    };
    DonNePage.prototype.saveData = function (donaNedData) {
        var _this = this;
        var y = new Date().getFullYear();
        var m = new Date().getMonth() + 1;
        var d = new Date().getDate();
        var dateNow = y + "/" + m + "/" + d;
        this.donaNedData.date = dateNow;
        this.db.list('donaNedData').push(donaNedData).then(function () {
            _this.presentAlert();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        })
            .catch(function (error) {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").style.textAlign = "center";
            document.getElementById("error").innerText = "هناك خطأ";
        });
    };
    DonNePage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad DonNePage');
    };
    DonNePage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    DonNePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'شكرا لك',
            subTitle: 'تم نشر حاجتك ومن يطلبها سيتصل بك',
            buttons: ['اغلاق']
        });
        alert.present();
    };
    DonNePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-don-ne',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\don-ne\don-ne.html"*/'<!--\n  Generated template for the NeArAvPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the RepoFamPoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header style="display: none">\n    <ion-navbar>\n  \n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n    <div style=" background-color: #151538;  height: 200px; width:100%" >\n\n      <div padding style="padding-bottom: 0%">\n      <table style="width: 100%;" >\n        <tr ><td style="width: 50%">\n            <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n            \n        </td><td>\n                <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n              \n          \n          </td>\n          </tr>\n          </table></div><br>\n    <div style="text-align: center;">   \n          <div style="background-image:url(../assets/imgs/22121.png);height: 164px;background-size: cover;width: 100%">  \n            <a class="ti_ce">تبرع بحاجة للمحتاجين</a></div>            \n  </div>\n        </div>\n  \n  \n      <div padding>\n\n        <table class="cta_o_td">\n          <tr>\n            <td>\n        <ion-label class="l_inn" >اسم الحاجة</ion-label>\n        <ion-input class="i_inn" type="text" placeholder=""  [(ngModel)]="donaNedData.name"></ion-input>\n      </td></tr>\n      <tr><td >\n          <ion-label class="l_inn">العنوان</ion-label>\n          <ion-input class="i_inn" type="text" placeholder="" [(ngModel)]="donaNedData.plase"></ion-input>\n          </td></tr>\n          <tr><td >\n              <ion-label class="l_inn">رقم الهاتف</ion-label>\n              <ion-input class="i_inn" type="number" placeholder="" [(ngModel)]="donaNedData.phoneNumber"></ion-input>\n              </td></tr>\n        <tr><td >\n        <ion-label class="l_inn">صورة الحاجة</ion-label>\n        <!-- <ion-input class="i_inn" type="File" placeholder="" (Change)=uplode(event)></ion-input> -->\n        <ion-card class="i_inn"><input type="file" accept="image/*" multiple #mulupload (change)="uplode($event)" placeholder="upload a from web file"/></ion-card>\n        \n        </td></tr>\n        \n\n\n        <tr><td >\n<ion-label class="l_inn" id="wqw12" style="text-align: center;display: none;">جاري التحميل يرجى الانتظار</ion-label>\n\n<button ion-button class="b_inn" id="bt12" (click)=saveData(donaNedData)>تبرع</button>\n            </td></tr>\n     \n      </table>\n      </div>\n  \n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\don-ne\don-ne.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__["a" /* AngularFireStorage */]])
    ], DonNePage);
    return DonNePage;
}());

//# sourceMappingURL=don-ne.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelll_modelll__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EditPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPostPage = /** @class */ (function () {
    function EditPostPage(navCtrl, auth, navParams, db, modalCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.data = [];
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]); //not read this error  
        }
        this.actsahj();
        this.data = this.actsahj();
    }
    EditPostPage.prototype.actsahj = function () {
        var postts = [];
        this.db.database.ref("post/").on("value", function (snapshot) {
            snapshot.forEach(function (a) {
                var y = a.val();
                y["key"] = a.key;
                postts.push(y);
            });
        });
        return postts;
    };
    EditPostPage.prototype.presentModal1 = function (key) {
        var data = {
            key: key
        };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modelll_modelll__["a" /* ModelllPage */], { data: data });
        modal.present();
    };
    EditPostPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    EditPostPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad EditPostPage');
    };
    EditPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-post',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\edit-post\edit-post.html"*/'<ion-header style="display: none">\n  <ion-navbar>\n\n\n    \n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div style=" background-color: #151538;  height: 200px; width:100%" >\n\n  <div padding style="padding-bottom: 0%">\n  <table style="width: 100%;" >\n    <tr ><td style="width: 50%">\n    \n      <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n    \n    </td><td>\n            <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n          \n      \n      </td>\n      </tr>\n      </table></div><br>\n<div style="text-align: center;">   \n      <div style="background-image:url(../assets/imgs/22121.png);height: 164px;background-size: cover;width: 100%">  \n        <a class="ti_ce">تعديل منشور او حذفه</a></div>\n</div>\n    </div>\n<div padding>\n  <div>\n  \n    <ion-list  *ngFor="let item of data">\n      <button menuClose ion-item (click)="presentModal1(item[\'key\'])" >{{item[\'address\']}}</button>\n    </ion-list>\n            \n</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\edit-post\edit-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], EditPostPage);
    return EditPostPage;
}());

//# sourceMappingURL=edit-post.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelllPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ModelllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModelllPage = /** @class */ (function () {
    function ModelllPage(stoR, auth, navCtrl, alertCtrl, navParams, view, db) {
        var _this = this;
        this.stoR = stoR;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.view = view;
        this.db = db;
        this.det = {
            address: "",
            date: "",
            detils: "",
            img: ""
        };
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]); //not read this error  
        }
        this.easax();
        var data = this.easax();
        //console.log(data);
        //console.log(data['key']);
        this.db.database.ref("post/").on("value", function (snap) {
            snap.forEach(function (x) {
                if (x.key == data['key']) {
                    var y = x.val();
                    //y['key'] = x.key;
                    _this.vkey = x.key;
                    _this.det.address = y['address'];
                    _this.det.date = y['date'];
                    _this.det.detils = y['detils'];
                    _this.det.img = y['img'];
                    _this.img = y['img'];
                    //console.log(this.det);
                }
            });
        });
    }
    ModelllPage.prototype.easax = function () {
        var data = this.navParams.get('data');
        return data;
    };
    ModelllPage.prototype.dellllet = function (vkey, img) {
        var _this = this;
        this.stoR.ref("post/" + img).delete();
        this.db.database.ref("post/" + vkey).remove().then(function () {
            _this.presentAlert1();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }).catch(function () { return _this.navCtrl.pop(); });
    };
    ModelllPage.prototype.eXt = function () {
        this.view.dismiss();
    };
    ModelllPage.prototype.saveD = function (det) {
        var _this = this;
        this.db.database.ref("post/" + this.vkey).update(det).then(function () {
            _this.presentAlert2();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }).catch(function () { return _this.navCtrl.pop(); });
    };
    ModelllPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ModelllPage');
    };
    ModelllPage.prototype.presentAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: 'تم الحذف',
            subTitle: 'تم حذف البيانات',
            buttons: ['اغلاق']
        });
        alert.present();
    };
    ModelllPage.prototype.presentAlert2 = function () {
        var alert = this.alertCtrl.create({
            title: 'تم التعديل',
            subTitle: 'تم تحديث البيانات',
            buttons: ['اغلاق']
        });
        alert.present();
    };
    ModelllPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modelll',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\modelll\modelll.html"*/'<!--\n  Generated template for the NeArAvPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the RepoFamPoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header style="display: none">\n    <ion-navbar>\n  \n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n  \n\n    <div style=" background-image:url(../assets/imgs/1234.png); background-color: #151538;  height: 200px; width:100%" >\n\n      <div padding style="padding-bottom: 0%">\n      <table style="width: 100%;" >\n        <tr ><td style="width: 50%">\n        \n            <ion-icon name="arrow-forward" class="ico_z" (click)=eXt()></ion-icon>\n          \n        </td><td>\n                <!-- <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon> -->\n              \n          \n          </td>\n          </tr>\n          </table></div><br>\n    <div style="text-align: center;">   \n          <div style="height: 164px;background-size: cover;width: 100%">  \n            <a class="ti_ce">تعديل المنشور اوحذفه</a>\n            <br>\n            <br>            \n              </div>\n          </div>\n  \n        </div>\n  \n  \n\n  \n  \n\n      <div padding style="text-align: right">\n\n          <button ion-button color="danger" (click)="dellllet(vkey,img)">حذف المنشور</button>\n          \n\n<ion-label class="l_inn">العنوان</ion-label>\n<ion-input class="i_inn" name="address" type="text" placeholder="" [(ngModel)]="det.address"></ion-input>\n\n\n<ion-label class="l_inn">التفاصيل</ion-label>\n<ion-input class="i_inn" name="detils" type="textarea" placeholder="" [(ngModel)]="det.detils"></ion-input>\n\n<ion-label class="l_inn">صورة المنشور</ion-label>\n<!-- <ion-input class="i_inn" type="File" placeholder="" (Change)=uplode(event)></ion-input> -->\n<ion-card class="i_inn"><input type="file" accept="image/*" multiple #mulupload (change)="uplode($event)" placeholder="upload a from web file"/></ion-card>\n\n<button id="bt12" ion-button class="b_inn" (click)=saveD(det)>تم التعديل</button>\n\n\n\n      </div>\n  \n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\modelll\modelll.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ModelllPage);
    return ModelllPage;
}());

//# sourceMappingURL=modelll.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditeNeeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EditeNeeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditeNeeePage = /** @class */ (function () {
    //ref:AngularFireStorageReference;
    function EditeNeeePage(stoR, auth, navCtrl, navParams, db, alertCtrl) {
        this.stoR = stoR;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.klkl = [];
        this.img = "grol9ly103e";
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]); //not read this error  
        }
        this.ghgj();
        this.klkl = this.ghgj();
    }
    EditeNeeePage.prototype.ghgj = function () {
        var gjh = [];
        this.db.database.ref("donaNedData/").on("value", function (snapshot) {
            snapshot.forEach(function (x) {
                var y = x.val();
                y['key'] = x.key;
                gjh.push(y);
            });
        });
        return gjh;
    };
    EditeNeeePage.prototype.presentConfirm = function (key, img) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'حذف حاجة معروضة',
            message: 'هل انت متأكد من الحذف ؟',
            buttons: [
                {
                    text: 'لا',
                    role: 'cancel',
                    handler: function () {
                        //console.log(key);
                    }
                },
                {
                    text: 'نعم',
                    handler: function () {
                        _this.db.database.ref("donaNedData/" + key).remove();
                        // var storage = firebase.storage;
                        // var reff1 = storage.ref()
                        // var reff = reff1.child("needs/" + img);
                        // reff.delete();
                        _this.stoR.ref("needs/" + img).delete();
                        //console.log(img);
                        _this.hjhjhj();
                    }
                }
            ]
        });
        alert.present();
    };
    EditeNeeePage.prototype.hjhjhj = function () {
        var alert = this.alertCtrl.create({
            title: 'تم الحذف',
            subTitle: 'تم حذف العنصر ',
            buttons: ['اغلاق']
        });
        alert.present();
    };
    EditeNeeePage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    EditeNeeePage.prototype.ionViewDidLoad = function () {
        //    console.log('ionViewDidLoad EditeNeeePage');
    };
    EditeNeeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edite-neee',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\edite-neee\edite-neee.html"*/'<ion-header style="display: none">\n    <ion-navbar>\n  \n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n  <div style=" background-color: #151538;  height: 200px; width:100%" >\n  \n    <div padding style="padding-bottom: 0%">\n    <table style="width: 100%;" >\n      <tr ><td style="width: 50%">\n      \n        <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n      \n      </td><td>\n              <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n            \n        \n        </td>\n        </tr>\n        </table></div><br>\n  <div style="text-align: center;">   \n        <div style="background-image:url(../assets/imgs/22121.png);height: 164px;background-size: cover;width: 100%">  \n          <a class="ti_ce">حذف حاجة معروضة</a></div>\n  </div>\n      </div>\n  <div padding>\n\n\n      <div  *ngFor="let item of klkl">\n          <div  class="di_pos" (click)= "presentConfirm(item[\'key\'],item[\'img\'])">\n            <ion-item><ion-label>اسم الحاجة : <a style="color:black">{{item[\'name\']}}</a></ion-label></ion-item>\n            <ion-item><ion-label>التاريخ : <a style="color:black">{{item[\'date\']}}</a></ion-label></ion-item>\n            <ion-item><ion-label><a style="color:black">اضغط للحذف</a></ion-label></ion-item>\n          </div>        \n          </div>\n\n    \n  \n  </div>\n  \n  </ion-content>\n  \n  '/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\edite-neee\edite-neee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditeNeeePage);
    return EditeNeeePage;
}());

//# sourceMappingURL=edite-neee.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditstattPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EditstattPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditstattPage = /** @class */ (function () {
    function EditstattPage(navCtrl, auth, navParams, db) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.db = db;
        this.det = {
            provice: " ",
            area: " ",
            nufampo: " ",
            nupers: " ",
            numchill: " ",
            numwemo: " ",
            nuwemowithout: " ",
            key: ""
        };
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]); //not read this error  
        }
        this.ools();
        this.det = this.ools();
    }
    EditstattPage.prototype.ools = function () {
        var det = {
            provice: "",
            area: "",
            nufampo: "",
            nupers: "",
            numchill: "",
            numwemo: "",
            nuwemowithout: "",
            key: ""
        };
        this.db.database.ref("statstic/").on("value", function (snap) {
            snap.forEach(function (y) {
                var a = y.val();
                det.provice = a["provice"];
                det.area = a["area"];
                det.nufampo = a["nufampo"];
                det.nupers = a["nupers"];
                det.numchill = a["numchill"];
                det.numwemo = a["numwemo"];
                det.nuwemowithout = a["nuwemowithout"];
                // console.log(a["provice"])     
                det.key = a.key;
            });
        });
        return det;
    };
    EditstattPage.prototype.savedata = function (det) {
        var _this = this;
        this.db.database.ref("statstic/" + det.key).set({
            provice: det.provice,
            area: det.area,
            nufampo: det.nufampo,
            nupers: det.nupers,
            numchill: det.numchill,
            numwemo: det.numwemo,
            nuwemowithout: det.nuwemowithout
        })
            .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }).catch(function () { return _this.navCtrl.pop(); });
    };
    EditstattPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad EditstattPage');
    };
    EditstattPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    EditstattPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editstatt',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\editstatt\editstatt.html"*/'<ion-header style="display: none">\n  <ion-navbar>\n\n    \n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div style=" background-color: #151538;  height: 200px; width:100%" >\n\n  <div padding style="padding-bottom: 0%">\n  <table style="width: 100%;" >\n    <tr ><td style="width: 50%">\n    \n        <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n        \n    </td><td>\n            <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n          \n      \n      </td>\n      </tr>\n      </table></div><br>\n<div style="text-align: center;">   \n      <div style="height: 164px;background-size: cover;width: 100%">  \n        <a class="ti_ce">تعديل الاحصائيات</a></div>\n</div>\n    </div>\n\n\n\n    <div padding style="text-align: right">\n\n<ion-label class="l_inn">المحافظة</ion-label>\n<ion-input class="i_inn" name="address" type="text" placeholder="" [(ngModel)]="det.provice"></ion-input>\n\n\n<ion-label class="l_inn">القضاء</ion-label>\n<ion-input class="i_inn" name="address" type="text" placeholder="" [(ngModel)]="det.area"></ion-input>\n\n\n<ion-label class="l_inn">عدد العائلات الفقيرة</ion-label>\n<ion-input class="i_inn" name="address" type="number" placeholder="" [(ngModel)]="det.nufampo"></ion-input>\n\n\n<ion-label class="l_inn">عدد الافراد</ion-label>\n<ion-input class="i_inn" name="number" type="textarea" placeholder="" [(ngModel)]="det.nupers"></ion-input>\n\n\n<ion-label class="l_inn">عدد الاطفال</ion-label>\n<ion-input class="i_inn" name="address" type="number" placeholder="" [(ngModel)]="det.numchill"></ion-input>\n\n\n<ion-label class="l_inn">عدد النساء</ion-label>\n<ion-input class="i_inn" name="address" type="number" placeholder="" [(ngModel)]="det.numwemo"></ion-input>\n\n\n<ion-label class="l_inn">عدد النساء بلا معيل</ion-label>\n<ion-input class="i_inn" name="address" type="number" placeholder="" [(ngModel)]="det.nuwemowithout"></ion-input>\n\n\n<button id="bt12" ion-button class="b_inn" (click)=savedata(det)>تعديل</button>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\editstatt\editstatt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], EditstattPage);
    return EditstattPage;
}());

//# sourceMappingURL=editstatt.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FedbacinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the FedbacinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FedbacinfoPage = /** @class */ (function () {
    function FedbacinfoPage(navCtrl, auth, stoR, alertCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.stoR = stoR;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.db = db;
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]); //not read this error  
        }
        this.id = this.navParams.get('id');
        this.oppp(this.id);
        //console.log(this.oppp(this.id))
        this.aliam = this.oppp(this.id);
        //console.log(this.aliam)
    }
    FedbacinfoPage.prototype.oppp = function (k) {
        var amar = [];
        this.db.database.ref("fedback/").on("value", function (snap) {
            snap.forEach(function (a) {
                if (k == a.key) {
                    var y_1 = a.val();
                    y_1["key"] = a.key;
                    var reeff = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"]().ref('problem/' + y_1['img']);
                    reeff.getDownloadURL().then(function (url) {
                        y_1["imgUrl"] = url;
                    }).then(function () {
                        amar['imgUrl'] = y_1['imgUrl'];
                        //amar['key'] = y['key'];
                        amar['address'] = y_1['address'];
                        amar['detils'] = y_1['detils'];
                        amar['img'] = y_1['img'];
                    });
                }
            });
        });
        return amar;
    };
    FedbacinfoPage.prototype.dellllet = function (immmg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'حذف حاجة معروضة',
            message: 'هل انت متأكد من الحذف ؟',
            buttons: [
                {
                    text: 'لا',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'نعم',
                    handler: function () {
                        _this.stoR.ref("problem/" + immmg).delete();
                        _this.db.database.ref("fedback/" + _this.id).remove().then(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    FedbacinfoPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad FedbacinfoPage');
    };
    FedbacinfoPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    FedbacinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fedbacinfo',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\fedbacinfo\fedbacinfo.html"*/'<ion-header style="display: none">\n    <ion-navbar>\n  \n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n  <div style=" background-color: #151538;  height: 200px; width:100%" >\n  \n    <div padding style="padding-bottom: 0%">\n    <table style="width: 100%;" >\n      <tr ><td style="width: 50%">\n      \n        <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n      \n      </td><td>\n              <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n            \n        \n        </td>\n        </tr>\n        </table></div><br>\n  <div style="text-align: center;">   \n        <div style="background-image:url(../assets/imgs/22121.png);height: 164px;background-size: cover;width: 100%">  \n          <a class="ti_ce">التفاصيل</a></div>\n  </div>\n      </div>\n  <div padding  >\n    <div class="di_pos" ><img src="{{aliam[\'imgUrl\']}}" /><ion-item><ion-label><a style="color:black">{{aliam[\'address\']}}</a></ion-label></ion-item>\n  <p>\n    {{aliam[\'detils\']}}\n  </p></div>        \n  </div>\n\n  <button ion-button color="danger" (click)="dellllet(aliam[\'img\'])">حذف المنشور</button>\n\n  \n  </ion-content>\n  \n  \n  \n  '/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\fedbacinfo\fedbacinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], FedbacinfoPage);
    return FedbacinfoPage;
}());

//# sourceMappingURL=fedbacinfo.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FedbackAdminPage; });
/* unused harmony export ASD */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fedbacinfo_fedbacinfo__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the FedbackAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FedbackAdminPage = /** @class */ (function () {
    function FedbackAdminPage(navCtrl, auth, db, Stg) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.db = db;
        this.Stg = Stg;
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]); //not read this error  
        }
        this.ooppeenn();
        this.pOST = this.ooppeenn();
    }
    FedbackAdminPage.prototype.ooppeenn = function () {
        var postar = [];
        //this.postar=[];
        // var reeff = firebase.storage().ref('file-uploads1.png')
        // reeff.getDownloadURL().then(function (url){
        //   console.log(url)
        // })
        this.db.database.ref("fedback/")
            .on("value", function (snapshot) {
            //console.log(snapshot.val())
            snapshot.forEach(function (a) {
                var y = a.val();
                y["key"] = a.key;
                var reeff = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]().ref('problem/' + y['img']);
                reeff.getDownloadURL().then(function (url) {
                    y["imgUrl"] = url;
                }).then(function () {
                    postar.push(y);
                });
                //n=postar.length-1;  
                // this.postar.push(this.post);
                // this.postar.push(y as Post);
            });
            // console.log(y.img);
            //console.log(n);  
            //console.log(n);  
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        // var h=0;
        // for (var i =n ; i<=0; i--){
        // this.pOST[h] = postar[i];
        // console.log("1")
        //  h++;
        // }
        return postar;
    };
    FedbackAdminPage.prototype.openInf = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fedbacinfo_fedbacinfo__["a" /* FedbacinfoPage */], { id: id });
    };
    FedbackAdminPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    FedbackAdminPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad FedbackAdminPage');
    };
    FedbackAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fedback-admin',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\fedback-admin\fedback-admin.html"*/'<ion-header style="display: none">\n    <ion-navbar>\n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n  <div style=" background-color: #151538;  height: 200px; width:100%" >\n  \n    <div padding style="padding-bottom: 0%">\n    <table style="width: 100%;" >\n      <tr ><td style="width: 50%">\n      \n          <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n          \n      </td><td>\n              <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n            \n        \n        </td>\n        </tr>\n        </table></div><br>\n  <div style="text-align: center;">   \n        <div style="height: 164px;background-size: cover;width: 100%">  \n          <a class="ti_ce">المشاكل المبلغ عنها</a></div>\n  </div>\n      </div>\n  \n  \n  \n      <div padding style="text-align: right">\n  \n\n\n\n          <div *ngFor="let item of pOST">\n              <div  class="di_pos" (click)="openInf(item[\'key\'])" >\n                <img src="{{item[\'imgUrl\']}}"/>\n                <ion-item><ion-label> <a style="color:black">{{item[\'address\']}}</a></ion-label></ion-item>\n              </div>        \n              </div>\n              \n\n  \n  </div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\fedback-admin\fedback-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__["a" /* AngularFireStorage */]])
    ], FedbackAdminPage);
    return FedbackAdminPage;
}());

var ASD = /** @class */ (function () {
    function ASD() {
    }
    return ASD;
}());

//# sourceMappingURL=fedback-admin.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the FedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FedbackPage = /** @class */ (function () {
    function FedbackPage(navCtrl, auth, navParams, alertCtrl, db, storag) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.storag = storag;
        this.det = {
            address: '',
            detils: '',
            img: ''
        };
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]); //not read this error  
        }
    }
    FedbackPage.prototype.uplode = function (event) {
        var id = Math.random().toString(36).substr(2);
        this.ref = this.storag.ref("problem/" + id);
        this.task = this.ref.put(event.target.files[0]);
        this.det.img = id;
        this.task.snapshotChanges().subscribe(function (snapshot) {
            document.getElementById("bt12").style.display = "none";
            document.getElementById("wqw12").style.display = "block";
            // if(snapshot.bytesTransferred/snapshot.totalBytes*100==100)
            // {
            // }else{
            // }
        }, function () {
            console.log("error");
        }, function () {
            console.log("complete");
            document.getElementById("bt12").style.display = "block";
            document.getElementById("wqw12").style.display = "none";
        });
    };
    FedbackPage.prototype.updata = function (det) {
        var _this = this;
        this.db.list("fedback").push(det).then(function () {
            _this.presentAlert();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }).catch(function () { return _this.navCtrl.pop(); });
    };
    FedbackPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    FedbackPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'تم ارسال الابلاغ',
            subTitle: 'شكرا لك  لابلاغنا',
            buttons: ['اغلاق']
        });
        alert.present();
    };
    FedbackPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad FedbackPage');
    };
    FedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fedback',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\fedback\fedback.html"*/'<ion-header style="display: none">\n    <ion-navbar>\n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n  <div style=" background-color: #151538;  height: 200px; width:100%" >\n  \n    <div padding style="padding-bottom: 0%">\n    <table style="width: 100%;" >\n      <tr ><td style="width: 50%">\n      \n          <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n          \n      </td><td>\n              <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n            \n        \n        </td>\n        </tr>\n        </table></div><br>\n  <div style="text-align: center;">   \n        <div style="height: 164px;background-size: cover;width: 100%">  \n          <a class="ti_ce">ابلاغ عن مشكلة</a></div>\n  </div>\n      </div>\n  \n  \n  \n      <div padding style="text-align: right">\n  \n  <ion-label class="l_inn">موضوع المشكلة</ion-label>\n  <ion-input class="i_inn" name="address" type="text" placeholder="" [(ngModel)]="det.address"></ion-input>\n  \n  \n  <ion-label class="l_inn">التفاصيل</ion-label>\n  <ion-input class="i_inn" name="detils" type="textarea" placeholder="" [(ngModel)]="det.detils"></ion-input>\n  \n  <ion-label class="l_inn">صورة المشكلة</ion-label>\n  <!-- <ion-input class="i_inn" type="File" placeholder="" (Change)=uplode(event)></ion-input> -->\n  <ion-card class="i_inn"><input type="file" accept="image/*" multiple #mulupload (change)="uplode($event)" placeholder="upload a from web file"/></ion-card>\n  \n  <button id="bt12" ion-button class="b_inn" (click)= updata(det)>ابلاغ</button>\n<ion-label class="l_inn" id="wqw12" style="text-align: center;display: none;">جاري التحميل يرجى الانتظار</ion-label>\n\n  \n  \n  </div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\fedback\fedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_storage__["a" /* AngularFireStorage */]])
    ], FedbackPage);
    return FedbackPage;
}());

//# sourceMappingURL=fedback.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DonatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonatePage = /** @class */ (function () {
    function DonatePage(navCtrl, navParams, alertCtrl, db, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.auth = auth;
        this.donaData = {
            name: "",
            palse: "",
            phonenumber: Number,
            type: ""
        };
        //var admm;
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]); //not read this error  
        }
    }
    DonatePage.prototype.savedata = function (donaData) {
        var _this = this;
        this.db.list('donaTe').push(donaData).then(function () {
            _this.presentAlert();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        })
            .catch(function (error) {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").style.textAlign = "center";
            document.getElementById("error").innerText = "هناك خطأ";
        });
    };
    DonatePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad DonatePage');
    };
    DonatePage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    DonatePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'شكرا لك',
            subTitle: 'سيتم الاتصال بك قريبا',
            buttons: ['اغلاق']
        });
        alert.present();
    };
    DonatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donate',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\donate\donate.html"*/'<ion-header style="display: none">\n    <ion-navbar>\n  \n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n  <div style=" background-color: #151538;  height: 200px; width:100%" >\n\n    <div padding style="padding-bottom: 0%">\n    <table style="width: 100%;" >\n      <tr ><td style="width: 50%">\n      \n          <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n          \n      </td><td>\n              <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n            \n        \n        </td>\n        </tr>\n        </table></div><br>\n  <div style="text-align: center;">   \n        <div style="background-image:url(../assets/imgs/22121.png);height: 164px;background-size: cover;width: 100%">  \n          <a class="ti_ce">تبرع</a></div>\n</div>\n      </div>\n\n      <div padding style="text-align: right">\n\n<ion-label class="l_inn">اسم المتبرع</ion-label>\n<ion-input class="i_inn" name="name" type="text" placeholder="" [(ngModel)]="donaData.name"></ion-input>\n\n\n<ion-label class="l_inn">مكان التبرع</ion-label>\n<ion-input class="i_inn" name="palse" type="text" placeholder="" [(ngModel)]="donaData.palse"></ion-input>\n\n<ion-label class="l_inn">رقم الهاتف</ion-label>\n<ion-input class="i_inn"  name="phonenumber" type="number" placeholder="" [(ngModel)]="donaData.phonenumber"></ion-input>\n\n<ion-label class="l_inn">نوع التبرع</ion-label>\n<ion-input class="i_inn" name="type" style="margin-right: 10%" list="waaaay" name="waaaay" [(ngModel)]="donaData.type"></ion-input>\n<datalist id="waaaay">\n    <option value="مالي" class="i_inn">مالي</option>\n    <option value="طعام" class="i_inn">طعام</option>\n    <option value="مواد او ادوات" class="i_inn">مواد او ادوات</option>    \n    <option value="اخرى" class="i_inn">اخرى</option>    \n  </datalist>\n\n\n\n<div style="display:none">\n  <ion-label class="l_inn">اخرى</ion-label>\n  <ion-input class="i_inn" type="text" placeholder=""></ion-input>\n</div>\n\n<button ion-button class="b_inn" (click)=savedata(donaData)>تبرع</button>\n\n\n<ion-label class="l_inn" id="error" style="display:none"></ion-label>\n\n</div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\donate\donate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], DonatePage);
    return DonatePage;
}());

//# sourceMappingURL=donate.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeArAvPage; });
/* unused harmony export Oia */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ned_info_ned_info__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the NeArAvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NeArAvPage = /** @class */ (function () {
    function NeArAvPage(navCtrl, auth, navParams, db) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.db = db;
        this.loaaq = [];
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]); //not read this error  
        }
        this.loaddd();
        //console.log(this.loaddd())
        this.loaaq = this.loaddd();
        //console.log(this.loaaq)
    }
    NeArAvPage.prototype.loaddd = function () {
        var loa = [];
        this.db.database.ref("donaNedData/").on("value", function (snap) {
            snap.forEach(function (a) {
                var u = a.val();
                u['key'] = a.key;
                var refobase = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref('needs/' + u['img']);
                refobase.getDownloadURL().then(function (url) {
                    u["imgUrl"] = url;
                }).then(function () {
                    loa.push(u);
                    // console.log(loa)
                });
            });
        });
        return loa;
    };
    NeArAvPage.prototype.openInf_ned = function (iql) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ned_info_ned_info__["a" /* NedInfoPage */], { id: iql });
    };
    NeArAvPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad NeArAvPage');
    };
    NeArAvPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    NeArAvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ne-ar-av',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\ne-ar-av\ne-ar-av.html"*/'<ion-header style="display: none">\n    <ion-navbar>\n  \n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n  <div style="background-color: #151538; width:100%" padding>\n    \n    <table style="width: 100%;">\n      <tr ><td style="width: 50%">\n      \n            <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n            \n      </td><td>\n              <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n            \n        \n        </td>\n        </tr>\n        </table>\n        <br>\n        <div style="text-align: center;margin: 0%"><a style="color:white;font-size:30px">حاجات متوفرة للمحتاجين</a></div>\n        <!-- <ion-input dir="rtl" placeholder="بحث" class="in_ser" ></ion-input> -->\n  <br>\n  \n  <div *ngFor="let i of loaaq">\n  <div class="di_pos"  (click)="openInf_ned(i[\'key\'])"><img src="{{i[\'imgUrl\']}}"/><p>{{i[\'name\']}}</p></div>        \n</div>\n      \n          \n  \n  \n  \n      </div>\n        \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\ne-ar-av\ne-ar-av.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], NeArAvPage);
    return NeArAvPage;
}());

var Oia = /** @class */ (function () {
    function Oia() {
    }
    return Oia;
}());

//# sourceMappingURL=ne-ar-av.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoforfamyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RepoforfamyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RepoforfamyPage = /** @class */ (function () {
    function RepoforfamyPage(navCtrl, alErt, auth, navParams, db) {
        this.navCtrl = navCtrl;
        this.alErt = alErt;
        this.auth = auth;
        this.navParams = navParams;
        this.db = db;
        this.looosos = [];
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]); //not read this error  
        }
        this.starkl();
        this.looosos = this.starkl();
    }
    RepoforfamyPage.prototype.starkl = function () {
        var loo = [];
        this.db.database.ref("poorFam/").on("value", function (snapshot) {
            snapshot.forEach(function (x) {
                var y = x.val();
                y['key'] = x.key;
                loo.push(y);
            });
        });
        return loo;
    };
    RepoforfamyPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    RepoforfamyPage.prototype.removeop = function (key) {
        this.presentConfirm(key);
    };
    RepoforfamyPage.prototype.presentConfirm = function (key) {
        var _this = this;
        var alert = this.alErt.create({
            title: 'حذف العائلة',
            message: 'هل تريج حذف العائلة؟',
            buttons: [
                {
                    text: 'لا',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'نعم',
                    handler: function () {
                        //console.log(key);
                        _this.db.database.ref("poorFam/" + key).remove().then(function () {
                            _this.navCtrl.pop();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    RepoforfamyPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad RepoforfamyPage');
    };
    RepoforfamyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-repoforfamy',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\repoforfamy\repoforfamy.html"*/'<ion-header style="display: none">\n  <ion-navbar>\n\n\n    \n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div style=" background-color: #151538;  height: 200px; width:100%" >\n\n  <div padding style="padding-bottom: 0%">\n  <table style="width: 100%;" >\n    <tr ><td style="width: 50%">\n    \n      <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n    \n    </td><td>\n            <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n          \n      \n      </td>\n      </tr>\n      </table></div><br>\n<div style="text-align: center;">   \n      <div style="background-image:url(../assets/imgs/22121.png);height: 164px;background-size: cover;width: 100%">  \n        <a class="ti_ce">العائلات المبلغ عنها</a></div>\n</div>\n    </div>\n<div padding>\n\n    \n  <div  *ngFor="let item of looosos">\n    <div  class="di_pos" (click)="removeop(item[\'key\'])" >\n      <ion-item><ion-label>اسم رب الاسرة : <a style="color:black">{{item[\'name\']}}</a></ion-label></ion-item>\n      <ion-item><ion-label>عدد الافراد : <a style="color:black">{{item[\'number\']}}</a></ion-label></ion-item>\n      <ion-item><ion-label>العنوان : <a style="color:black">{{item[\'plase\']}}</a></ion-label></ion-item>\n      <ion-item><ion-label>رقم الهاتف : <a style="color:black">{{item[\'phoneNumber\']}}</a></ion-label></ion-item>\n    </div>        \n    </div>\n  \n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\repoforfamy\repoforfamy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], RepoforfamyPage);
    return RepoforfamyPage;
}());

//# sourceMappingURL=repoforfamy.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoFamPoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RepoFamPoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



var RepoFamPoPage = /** @class */ (function () {
    function RepoFamPoPage(navCtrl, auth, alertCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.db = db;
        this.donaData = {
            name: "",
            number: Number,
            plase: "",
            phoneNumber: Number
        };
        var user = this.auth.auth.currentUser;
        if (user) {
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]); //not read this error  
        }
    }
    RepoFamPoPage.prototype.saveData = function (donaData) {
        var _this = this;
        this.db.list('poorFam').push(donaData).then(function () {
            _this.presentAlert1();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        })
            .catch(function (error) {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").style.textAlign = "center";
            document.getElementById("error").innerText = "هناك خطأ";
        });
    };
    RepoFamPoPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad RepoFamPoPage');
    };
    RepoFamPoPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    RepoFamPoPage.prototype.presentAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: 'تم التبليغ',
            subTitle: 'شكرا لك سيتم الاتصال ومتابعة الموضوع قريبا',
            buttons: ['اغلاق']
        });
        alert.present();
    };
    RepoFamPoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-repo-fam-po',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\repo-fam-po\repo-fam-po.html"*/'<!--\n  Generated template for the RepoFamPoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n  <ion-header style="display: none">\n    <ion-navbar>\n  \n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n      \n      <div style=" background-image:url(../assets/imgs/214343.png);background-color: #151538;  height: 200px; width:100%" >\n\n          <div padding style="padding-bottom: 0%">\n          <table style="width: 100%;" >\n            <tr ><td style="width: 50%">\n            \n                <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n          \n            </td><td>\n                    <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n                  \n              \n              </td>\n              </tr>\n              </table></div><br>\n        <div style="text-align: center;">   \n              <div style="height: 164px;background-size: cover;width: 100%">  \n                <a class="ti_ce">تبليغ عن عائلة فقيرة</a></div>            \n      </div>\n            </div>\n      \n      \n      \n      \n    \n  \n  \n      <div padding>\n\n        <table class="cta_o_td" >\n          <tr>\n            <td>\n        <ion-label class="l_inn" >اسم رب العائلة</ion-label>\n        <ion-input class="i_inn" name="name" type="text" placeholder="" [(ngModel)]="donaData.name"></ion-input>\n      </td><td >\n        <ion-label class="l_inn">عدد الافراد</ion-label>\n        <ion-input class="i_inn" name="number" type="number" placeholder="" [(ngModel)]="donaData.number"></ion-input>\n      </td></tr>\n        <tr><td  colspan="2">\n        <ion-label class="l_inn">عنوان العائلة</ion-label>\n        <ion-input class="i_inn"name="plase" type="text" placeholder="" [(ngModel)]="donaData.plase"></ion-input>\n        </td></tr>\n        <tr><td colspan="2">\n        <ion-label class="l_inn">رقم الهاتف</ion-label>\n        <ion-input class="i_inn" name="phoneNumber" type="number" placeholder="" [(ngModel)]="donaData.phoneNumber"></ion-input>\n        \n        </td></tr>\n        <tr><td  colspan="2">\n        <div style="display:none">\n          <ion-label class="l_inn">اخرى</ion-label>\n          <ion-input class="i_inn" type="text" placeholder=""></ion-input>\n        </div>\n        </td></tr>\n        <tr><td  colspan="2">\n        <button ion-button class="b_inn" (click)=saveData(donaData)>تبليغ</button>\n        <ion-label class="l_inn" id="error" style="display:none"></ion-label>\n      </td>\n      </tr>\n      </table>\n      </div>\n  \n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\repo-fam-po\repo-fam-po.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], RepoFamPoPage);
    return RepoFamPoPage;
}());

//# sourceMappingURL=repo-fam-po.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_post_add_post__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_post_edit_post__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edite_neee_edite_neee__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editstatt_editstatt__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__repoforfamy_repoforfamy__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fedback_admin_fedback_admin__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, auth, navParams) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        var user = this.auth.auth.currentUser;
        if (user) {
            if (user.displayName != "admin") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
            }
            // User is signed in.
            //  admm = user.displayName;
            //console.log(admm);
        }
        else {
            // No user is signed in.
            //admm = "unadmin";
            //console.log(admm);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]); //not read this error  
        }
        this.pages = [
            { title: 'AddPost', component: __WEBPACK_IMPORTED_MODULE_2__add_post_add_post__["a" /* AddPostPage */] },
            { title: 'Donate', component: __WEBPACK_IMPORTED_MODULE_3__edit_post_edit_post__["a" /* EditPostPage */] },
            { title: 'Statistics', component: __WEBPACK_IMPORTED_MODULE_6__repoforfamy_repoforfamy__["a" /* RepoforfamyPage */] },
            { title: 'RepoFamPo', component: __WEBPACK_IMPORTED_MODULE_4__edite_neee_edite_neee__["a" /* EditeNeeePage */] },
            { title: 'DonNe', component: __WEBPACK_IMPORTED_MODULE_5__editstatt_editstatt__["a" /* EditstattPage */] },
            { title: 'FedbackAdmin', component: __WEBPACK_IMPORTED_MODULE_7__fedback_admin_fedback_admin__["a" /* FedbackAdminPage */] },
        ];
    }
    SettingPage.prototype.openPage = function (pages) {
        this.navCtrl.push(pages.component);
    };
    SettingPage.prototype.ionViewDidLoad = function () {
    };
    SettingPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\setting\setting.html"*/'<ion-header style="display: none">\n  <ion-navbar>\n\n    \n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div style=" background-color: #151538;  height: 200px; width:100%" >\n\n  <div padding style="padding-bottom: 0%">\n  <table style="width: 100%;" >\n    <tr ><td style="width: 50%">\n    \n        <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n        \n    </td><td>\n            <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n          \n      \n      </td>\n      </tr>\n      </table></div><br>\n<div style="text-align: center;">   \n      <div style="height: 164px;background-size: cover;width: 100%">  \n        <a class="ti_ce">الاعدادات</a></div>\n</div>\n    </div>\n\n\n\n  <ion-list>\n    <button menuClose ion-item (click)=openPage(pages[0]) >اضافة منشور</button>\n    <button menuClose ion-item (click)=openPage(pages[1]) >تعديل منشور او حذفه</button>\n    <button menuClose ion-item (click)=openPage(pages[2]) >العائلات المبلغ عنها</button>\n    <button menuClose ion-item (click)=openPage(pages[3]) >حذف حاجة معروضة</button>\n    <button menuClose ion-item (click)=openPage(pages[4]) >تعديل الاحصائيات</button>\n    <button menuClose ion-item (click)=openPage(pages[5]) >المشاكل المبلغ عنها</button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatisticsPage = /** @class */ (function () {
    function StatisticsPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.det = {
            provice: " ",
            area: " ",
            nufampo: " ",
            nupers: " ",
            numchill: " ",
            numwemo: " ",
            nuwemowithout: " "
        };
        this.ools();
        this.det = this.ools();
    }
    StatisticsPage.prototype.ools = function () {
        var det = {
            provice: "",
            area: "",
            nufampo: "",
            nupers: "",
            numchill: "",
            numwemo: "",
            nuwemowithout: ""
        };
        this.db.database.ref("statstic/").on("value", function (snap) {
            snap.forEach(function (y) {
                var a = y.val();
                det.provice = a["provice"];
                det.area = a["area"];
                det.nufampo = a["nufampo"];
                det.nupers = a["nupers"];
                det.numchill = a["numchill"];
                det.numwemo = a["numwemo"];
                det.nuwemowithout = a["nuwemowithout"];
                // console.log(a["provice"])     
            });
        });
        return det;
    };
    StatisticsPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad StatisticsPage');
    };
    StatisticsPage.prototype.baCk = function () {
        this.navCtrl.pop();
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\statistics\statistics.html"*/'<!--\n  Generated template for the NeArAvPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the RepoFamPoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header style="display: none">\n    <ion-navbar>\n  \n  \n      \n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n  \n\n    <div style=" background-image:url(../assets/imgs/1234.png); background-color: #151538;  height: 200px; width:100%" >\n\n      <div padding style="padding-bottom: 0%">\n      <table style="width: 100%;" >\n        <tr ><td style="width: 50%">\n        \n            <ion-icon name="arrow-forward" class="ico_z" (click)=baCk()></ion-icon>\n          \n        </td><td>\n                <ion-icon menuToggle name="menu" class="ico_z" style="float: left;"></ion-icon>\n              \n          \n          </td>\n          </tr>\n          </table></div><br>\n    <div style="text-align: center;">   \n          <div style="height: 164px;background-size: cover;width: 100%">  \n            <a class="ti_ce">أحصائيات</a>\n            <br>\n            <br>            \n            <table class="cta_o_td"> \n              <tr><td >\n                  <button ion-button class="b_inn">{{det.provice}}</button>\n                  \n                  </td>\n                  <td >\n                      \n                      <button ion-button class="b_inn">{{det.area}}</button>\n                      </td></tr>\n                </table> \n              </div>\n          </div>\n  \n        </div>\n  \n  \n\n  \n  \n\n      <div padding>\n\n          \n              <ion-item-group>                \n                <ion-item>عدد العائلات الفقيرة<div class="sta_num">{{det.nufampo}}</div></ion-item>\n                <ion-item>عدد الافراد<div class="sta_num ">{{det.nupers}}</div></ion-item>\n                <ion-item>عدد الاطفال<div class="sta_num">{{det.numchill}}</div></ion-item>\n                <ion-item>عدد النساء<div class="sta_num">{{det.numwemo}}</div></ion-item>\n                <ion-item>عدد النساء بلا معيل<div class="sta_num">{{det.nuwemowithout}}</div></ion-item>\n                <ion-item></ion-item>\n              </ion-item-group>\n          \n\n      </div>\n  \n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\statistics\statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 248;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export PostInn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_info_post_info__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(alertCtrl, menuCont, navCtrl, db, Stg, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.menuCont = menuCont;
        this.navCtrl = navCtrl;
        this.db = db;
        this.Stg = Stg;
        this.loadingCtrl = loadingCtrl;
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "Please wait..."
        });
        loader.present();
        this.x = 1;
        this.menuCont.open("asasasa");
        this.ooppeenn();
        this.pOST = this.ooppeenn().reverse();
        if (this.pOST != null) {
            setTimeout(function () { loader.dismiss(); }, 3000);
        }
        else {
            this.errorrdataa();
        }
    }
    HomePage.prototype.ooppeenn = function () {
        var postar = [];
        //this.postar=[];
        // var reeff = firebase.storage().ref('file-uploads1.png')
        // reeff.getDownloadURL().then(function (url){
        //   console.log(url)
        // })
        this.db.database.ref("post/")
            .on("value", function (snapshot) {
            //console.log(snapshot.val())
            snapshot.forEach(function (a) {
                var y = a.val();
                y["key"] = a.key;
                var reeff = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]().ref('post/' + y['img']);
                reeff.getDownloadURL().then(function (url) {
                    y["imgUrl"] = url;
                }).then(function () {
                    postar.push(y);
                });
                //n=postar.length-1;  
                // this.postar.push(this.post);
                // this.postar.push(y as Post);
            });
            // console.log(y.img);
            //console.log(n);  
            //console.log(n);
            //console.log("load data");
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        // var h=0;
        // for (var i =n ; i<=0; i--){
        // this.pOST[h] = postar[i];
        // console.log("1")
        //  h++;
        // }
        return postar;
    };
    HomePage.prototype.jkjk = function () {
    };
    HomePage.prototype.openInf = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__post_info_post_info__["a" /* PostInfoPage */], { id: id });
    };
    //loading>>>...
    HomePage.prototype.presentLoading = function () {
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
    };
    HomePage.prototype.errorrdataa = function () {
        var alert = this.alertCtrl.create({
            title: 'Error Conect',
            subTitle: 'Error in load data, please close app.',
            buttons: ['Ok']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\home\home.html"*/'<ion-header style="display: none">\n  <ion-navbar>\n\n\n    \n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  \n<div style="background-color: #151538; height: 200px; width:100%" padding>\n  \n  <table style="width: 100%;">\n    <tr ><td style="width: 50%">\n    \n        <!-- <ion-icon name="arrow-forward" class="ico_z"></ion-icon> -->\n    \n    </td><td>\n            <ion-icon menuToggle (click)="jkjk()" name="menu" class="ico_z" style="float: left;"></ion-icon>\n          \n      \n      </td>\n      </tr>\n      </table>\n      <div style="text-align: center;font-size: 30px"><a style="color:white">تبرع لتأكل عائلة فقيرة</a></div>\n<br>\n\n<!-- item[\'key\']\n\n-->\n\n\n<div *ngFor="let item of pOST">\n<div  class="di_pos" (click)="openInf(item[\'key\'])" >\n  <img src="{{item[\'imgUrl\']}}"/>\n  <ion-item><ion-label>{{item[\'date\']}} : <a style="color:black">{{item[\'address\']}}</a></ion-label></ion-item>\n</div>        \n</div>\n\n  \n    \n      \n<br>\n  </div>\n\n</ion-content>\n<ion-footer style="background-color: #151538; height: 40px;text-align: center;  ">\n    \n      <a style="text-align: center; color: white ;font-size: 18px">Code for Iraq 2018</a>\n    \n  </ion-footer>\n\n\n  '/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

var PostInn = /** @class */ (function () {
    function PostInn() {
    }
    return PostInn;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		597,
		19
	],
	"../pages/add-post/add-post.module": [
		598,
		18
	],
	"../pages/don-ne/don-ne.module": [
		599,
		17
	],
	"../pages/donate/donate.module": [
		607,
		16
	],
	"../pages/edit-post/edit-post.module": [
		600,
		15
	],
	"../pages/edite-neee/edite-neee.module": [
		601,
		14
	],
	"../pages/editstatt/editstatt.module": [
		602,
		13
	],
	"../pages/fedbacinfo/fedbacinfo.module": [
		603,
		12
	],
	"../pages/fedback-admin/fedback-admin.module": [
		604,
		11
	],
	"../pages/fedback/fedback.module": [
		605,
		10
	],
	"../pages/login/login.module": [
		606,
		9
	],
	"../pages/modelll/modelll.module": [
		608,
		8
	],
	"../pages/ne-ar-av/ne-ar-av.module": [
		609,
		7
	],
	"../pages/ned-info/ned-info.module": [
		610,
		6
	],
	"../pages/post-info/post-info.module": [
		611,
		5
	],
	"../pages/repo-fam-po/repo-fam-po.module": [
		613,
		4
	],
	"../pages/repoforfamy/repoforfamy.module": [
		612,
		3
	],
	"../pages/setting/setting.module": [
		614,
		2
	],
	"../pages/signup/signup.module": [
		616,
		1
	],
	"../pages/statistics/statistics.module": [
		615,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 289;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(476);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_donate_donate__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_repo_fam_po_repo_fam_po__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ne_ar_av_ne_ar_av__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_don_ne_don_ne__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_statistics_statistics__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_post_info_post_info__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ned_info_ned_info__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_setting_setting__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_post_add_post__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_post_edit_post__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_edite_neee_edite_neee__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_editstatt_editstatt__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_repoforfamy_repoforfamy__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_modelll_modelll__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_fedback_fedback__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_fedback_admin_fedback_admin__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_fedbacinfo_fedbacinfo__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_fire__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_fire_firestore__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_fire_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_fire_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_fire_storage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var environment = {
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_donate_donate__["a" /* DonatePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_repo_fam_po_repo_fam_po__["a" /* RepoFamPoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ne_ar_av_ne_ar_av__["a" /* NeArAvPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_don_ne_don_ne__["a" /* DonNePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_post_info_post_info__["a" /* PostInfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ned_info_ned_info__["a" /* NedInfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_post_add_post__["a" /* AddPostPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_post_edit_post__["a" /* EditPostPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_edite_neee_edite_neee__["a" /* EditeNeeePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_editstatt_editstatt__["a" /* EditstattPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_repoforfamy_repoforfamy__["a" /* RepoforfamyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_modelll_modelll__["a" /* ModelllPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_fedback_fedback__["a" /* FedbackPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_fedback_admin_fedback_admin__["a" /* FedbackAdminPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_fedbacinfo_fedbacinfo__["a" /* FedbacinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-post/add-post.module#AddPostPageModule', name: 'AddPostPage', segment: 'add-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/don-ne/don-ne.module#DonNePageModule', name: 'DonNePage', segment: 'don-ne', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-post/edit-post.module#EditPostPageModule', name: 'EditPostPage', segment: 'edit-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edite-neee/edite-neee.module#EditeNeeePageModule', name: 'EditeNeeePage', segment: 'edite-neee', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editstatt/editstatt.module#EditstattPageModule', name: 'EditstattPage', segment: 'editstatt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fedbacinfo/fedbacinfo.module#FedbacinfoPageModule', name: 'FedbacinfoPage', segment: 'fedbacinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fedback-admin/fedback-admin.module#FedbackAdminPageModule', name: 'FedbackAdminPage', segment: 'fedback-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fedback/fedback.module#FedbackPageModule', name: 'FedbackPage', segment: 'fedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donate/donate.module#DonatePageModule', name: 'DonatePage', segment: 'donate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modelll/modelll.module#ModelllPageModule', name: 'ModelllPage', segment: 'modelll', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ne-ar-av/ne-ar-av.module#NeArAvPageModule', name: 'NeArAvPage', segment: 'ne-ar-av', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ned-info/ned-info.module#NedInfoPageModule', name: 'NedInfoPage', segment: 'ned-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-info/post-info.module#PostInfoPageModule', name: 'PostInfoPage', segment: 'post-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/repoforfamy/repoforfamy.module#RepoforfamyPageModule', name: 'RepoforfamyPage', segment: 'repoforfamy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/repo-fam-po/repo-fam-po.module#RepoFamPoPageModule', name: 'RepoFamPoPage', segment: 'repo-fam-po', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statistics/statistics.module#StatisticsPageModule', name: 'StatisticsPage', segment: 'statistics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_27__angular_fire__["a" /* AngularFireModule */].initializeApp(environment.firebase),
                __WEBPACK_IMPORTED_MODULE_28__angular_fire_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_fire_storage__["b" /* AngularFireStorageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_donate_donate__["a" /* DonatePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_repo_fam_po_repo_fam_po__["a" /* RepoFamPoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ne_ar_av_ne_ar_av__["a" /* NeArAvPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_don_ne_don_ne__["a" /* DonNePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_post_info_post_info__["a" /* PostInfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ned_info_ned_info__["a" /* NedInfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_post_add_post__["a" /* AddPostPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_post_edit_post__["a" /* EditPostPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_edite_neee_edite_neee__["a" /* EditeNeeePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_editstatt_editstatt__["a" /* EditstattPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_repoforfamy_repoforfamy__["a" /* RepoforfamyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_modelll_modelll__["a" /* ModelllPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_fedback_fedback__["a" /* FedbackPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_fedback_admin_fedback_admin__["a" /* FedbackAdminPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_fedbacinfo_fedbacinfo__["a" /* FedbacinfoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_donate_donate__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_repo_fam_po_repo_fam_po__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ne_ar_av_ne_ar_av__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_don_ne_don_ne__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_statistics_statistics__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_post_info_post_info__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_ned_info_ned_info__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_fedback_fedback__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.seco = 0;
        setTimeout(function () {
            _this.menuOpened();
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
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Donate', component: __WEBPACK_IMPORTED_MODULE_6__pages_donate_donate__["a" /* DonatePage */] },
            { title: 'RepoFamPo', component: __WEBPACK_IMPORTED_MODULE_7__pages_repo_fam_po_repo_fam_po__["a" /* RepoFamPoPage */] },
            { title: 'DonNe', component: __WEBPACK_IMPORTED_MODULE_9__pages_don_ne_don_ne__["a" /* DonNePage */] },
            { title: 'NeArAv', component: __WEBPACK_IMPORTED_MODULE_8__pages_ne_ar_av_ne_ar_av__["a" /* NeArAvPage */] },
            { title: 'Statistics', component: __WEBPACK_IMPORTED_MODULE_10__pages_statistics_statistics__["a" /* StatisticsPage */] },
            { title: 'PostInfo', component: __WEBPACK_IMPORTED_MODULE_11__pages_post_info_post_info__["a" /* PostInfoPage */] },
            { title: 'NedInfo', component: __WEBPACK_IMPORTED_MODULE_12__pages_ned_info_ned_info__["a" /* NedInfoPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */] },
            { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__["a" /* SettingPage */] },
            { title: 'fedback', component: __WEBPACK_IMPORTED_MODULE_16__pages_fedback_fedback__["a" /* FedbackPage */] },
        ];
    }
    MyApp.prototype.klklk = function () {
        //var klk ;
        //this.auth.auth.currentUser.displayName
        //this.auth.authState.subscribe(user=>{
        //klk = this.auth.auth.currentUser.displayName;
        // console.log(this.auth.auth.currentUser.displayName)
        //klk = user.displayName;
        // })
        //return klk;
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        this.nav.push(page.component);
    };
    MyApp.prototype.openPageSet = function (page) {
        var user = this.auth.auth.currentUser;
        if (user) {
            if (user.displayName == "admin") {
                this.nav.push(page.component);
            }
            else {
                this.prntAlert();
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
            }
        }
        else {
            this.prntAlert();
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
        }
    };
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
    MyApp.prototype.prntAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'خطأ',
            subTitle: 'يجب تسجيل الدخول بصفة مسؤول',
            buttons: ['اغلاق']
        });
        alert.present();
    };
    MyApp.prototype.menuOpened = function () {
        var assa = this.auth.auth.currentUser;
        if (assa) {
            this.seco = 1;
        }
        else {
            this.seco = 0;
        }
    };
    MyApp.prototype.Logout = function () {
        var _this = this;
        this.auth.auth.signOut().then(function () {
            _this.seco = 0;
        });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\AlMehmdy\Desktop\Donation\src\app\app.html"*/' <ion-menu [content]="content" (ionOpen)="menuOpened()" >\n    <ion-header style="display: none">\n        <ion-toolbar style="display: none">\n            \n        </ion-toolbar>\n      </ion-header>\n    \n      <ion-content >\n    \n  \n          <div style="background-color: #151538; height: 200px; width:100%" >\n              <br><br><br><br><br> <br> \n              <ion-icon *ngIf="seco==0" name="log-in" style="color:white;zoom: 1.5;" menuClose (click)=openPage(pages[9])><a style="color:white"> تسجيل الدخول</a>  </ion-icon>\n              \n            </div>\n        <ion-list>\n          \n          <button menuClose ion-item (click)=openPage(pages[0]) >الرئيسية</button>\n         <button menuClose ion-item (click)=openPage(pages[1]) >تبرع</button>\n        <button menuClose ion-item (click)=openPage(pages[2]) >تبليغ عن عائلة فقيرة</button>\n          <button menuClose ion-item (click)=openPage(pages[3]) >تبرع بحاجة للمحتاجين</button>\n          <button menuClose ion-item (click)=openPage(pages[4]) >حاجات متوفرة للمحتاجين</button>\n          <button menuClose ion-item (click)=openPage(pages[5]) >احصائيات</button>\n          <button menuClose ion-item (click)=openPage(pages[11]) >ابلاغ عن مشكلة</button>\n          <button *ngIf="seco==1" menuClose ion-item (click)=Logout() >تسجيل الخروج</button>\n        </ion-list>\n    \n    \n</ion-content>\n<ion-footer padding>\n  \n    <table style="width: 100%;" >\n        <tr ><td style="width: 50%">\n        \n            <!-- <ion-icon name="arrow-forward" class="ico_z"></ion-icon> -->\n            <div style="float: right;" menuClose (click)=openPage(pages[8])><img src="https://firebasestorage.googleapis.com/v0/b/donation-f2a8f.appspot.com/o/icons%2F1232131.png?alt=media&token=7926cab1-d3c6-4a8e-839f-04bebc6ee9cb" width="40px" height="35px"/></div>                \n\n        </td><td dir="">\n                <!-- //setting -->\n            <div  style="float: left;" menuClose (click)=openPageSet(pages[10]) ><img src="https://firebasestorage.googleapis.com/v0/b/donation-f2a8f.appspot.com/o/icons%2Fksfk.png?alt=media&token=0c4ce497-3bd6-4ac9-aa55-fe985b431f02" width="40px" height="45px"/></div>                \n                \n          </td>\n          </tr>\n          </table>\n          </ion-footer>\n  <!--\n  <ion-header style="display: none">\n    <ion-toolbar style="display: none">\n        \n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content >\n      <div style="background-color: #151538; height: 200px; width:100%" >\n          <br><br><br><br><br> <br> \n          <ion-icon *ngIf="seco==0" name="log-in" style="color:white;zoom: 1.5;" menuClose (click)=openPage(pages[9])><a style="color:white"> تسجيل الدخول</a>  </ion-icon>\n          \n        </div>\n    <ion-list>\n      \n      <button menuClose ion-item (click)=openPage(pages[0]) >الرئيسية</button>\n      <button menuClose ion-item (click)=openPage(pages[1]) >تبرع</button>\n      <button menuClose ion-item (click)=openPage(pages[2]) >تبليغ عن عائلة فقيرة</button>\n      <button menuClose ion-item (click)=openPage(pages[3]) >تبرع بحاجة للمحتاجين</button>\n      <button menuClose ion-item (click)=openPage(pages[4]) >حاجات متوفرة للمحتاجين</button>\n      <button menuClose ion-item (click)=openPage(pages[5]) >احصائيات</button>\n      <button menuClose ion-item (click)=openPage(pages[11]) >ابلاغ عن مشكلة</button>\n      <button *ngIf="seco==1" menuClose ion-item (click)=Logout() >تسجيل الخروج</button>\n    </ion-list>\n\n  </ion-content>\n<ion-footer padding>\n  \n    <table style="width: 100%;" >\n        <tr ><td style="width: 50%">\n        -->\n            <!-- <ion-icon name="arrow-forward" class="ico_z"></ion-icon> -->\n           <!--\n            <div style="float: right;" menuClose (click)=openPage(pages[8])><img src="../../assets/imgs/1232131.png" width="40px" height="35px"/></div>                \n\n        </td><td dir="">\n        -->   <!-- //setting -->\n        <!--\n            <div  style="float: left;" menuClose (click)=openPageSet(pages[10]) ><img src="../../assets/imgs/ksfk.png" width="40px" height="45px"/></div>                \n                \n          </td>\n          </tr>\n          </table>\n          </ion-footer>\n</ion-menu> -->\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\AlMehmdy\Desktop\Donation\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map