webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeilnehmerServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(101);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TeilnehmerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TeilnehmerServiceProvider = /** @class */ (function () {
    function TeilnehmerServiceProvider(afd) {
        this.afd = afd;
        this.teilnehmerRef = this.afd.list('/Teilnehmer/');
        this.allTeilnehmer = this.teilnehmerRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    TeilnehmerServiceProvider.prototype.getAllTeilnehmer = function () {
        return this.allTeilnehmer;
    };
    TeilnehmerServiceProvider.prototype.addTeilnehmer = function (newPrename, newName) {
        return this.teilnehmerRef.push({ Vorname: newPrename, Name: newName });
    };
    TeilnehmerServiceProvider.prototype.updateTeilnehmer = function (key, newText) {
        return this.teilnehmerRef.update(key, { Name: newText });
    };
    // doneItem(key, status){
    //    return this.postenRef.update(key, {isDone: status});
    // }
    TeilnehmerServiceProvider.prototype.deleteTeilnehmer = function (key) {
        this.teilnehmerRef.remove(key);
    };
    TeilnehmerServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TeilnehmerServiceProvider);
    return TeilnehmerServiceProvider;
}());

//# sourceMappingURL=teilnehmer-service.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostendetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teilnehmer_service_teilnehmer_service__ = __webpack_require__(100);
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
 * Generated class for the PostendetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostendetailPage = /** @class */ (function () {
    function PostendetailPage(navCtrl, navParams, teilnehmerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teilnehmerService = teilnehmerService;
        this.posten = navParams.get('posten');
        this.allTeilnehmer = this.teilnehmerService.getAllTeilnehmer();
    }
    PostendetailPage.prototype.logForm = function (form) {
        console.log(form);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
    ], PostendetailPage.prototype, "content", void 0);
    PostendetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postendetail',template:/*ion-inline-start:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/postendetail/postendetail.html"*/'<!--\n  Generated template for the PostendetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{posten.Name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content">\n  <form #form="ngForm" (ngSubmit)="logForm(form)">\n    <ion-list>\n      <ion-item>\n        <ion-label>Teilnehmer</ion-label>\n        <ion-select multiple="false" >\n          <ion-option *ngFor="let tn of allTeilnehmer  | async" >{{tn.Vorname}} {{tn.Name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-list-header>\n        Punktzahl\n        <ion-badge item-end color="secondary"></ion-badge>\n      </ion-list-header>\n      <ion-item>\n        <ion-range min="0" max="10" step="1" snaps="true" color="secondary">\n          <ion-label range-left>0</ion-label>\n          <ion-label range-right>10</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-list>\n    <button ion-button full type="submit">Speichern</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/postendetail/postendetail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_teilnehmer_service_teilnehmer_service__["a" /* TeilnehmerServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_teilnehmer_service_teilnehmer_service__["a" /* TeilnehmerServiceProvider */]) === "function" && _d || Object])
    ], PostendetailPage);
    return PostendetailPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=postendetail.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RanglistePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
 * Generated class for the RanglistePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RanglistePage = /** @class */ (function () {
    function RanglistePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RanglistePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RanglistePage');
    };
    RanglistePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rangliste',template:/*ion-inline-start:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/rangliste/rangliste.html"*/'<!--\n  Generated template for the RanglistePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Rangliste</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/rangliste/rangliste.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RanglistePage);
    return RanglistePage;
}());

//# sourceMappingURL=rangliste.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeilnehmerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teilnehmer_service_teilnehmer_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(111);
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
 * Generated class for the TeilnehmerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeilnehmerPage = /** @class */ (function () {
    function TeilnehmerPage(navCtrl, teilnehmerService, keyboard, alertCtrl) {
        this.navCtrl = navCtrl;
        this.teilnehmerService = teilnehmerService;
        this.keyboard = keyboard;
        this.alertCtrl = alertCtrl;
        this.newTeilnehmer = '';
        this.allTeilnehmer = this.teilnehmerService.getAllTeilnehmer();
    }
    TeilnehmerPage.prototype.addTeilnehmer = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add Teilnehmer',
            inputs: [
                {
                    name: 'vorname',
                    placeholder: 'Vorname'
                },
                {
                    name: 'name',
                    placeholder: 'Name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (data.name.length === 0 || !data.name.trim() || data.vorname.length === 0 || !data.vorname.trim()) {
                            console.log("empty");
                        }
                        else {
                            _this.teilnehmerService.addTeilnehmer(data.vorname, data.name).then(function () {
                                _this.newTeilnehmer = "";
                                _this.keyboard.close();
                                _this.content.scrollToBottom();
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    TeilnehmerPage.prototype.editTeilnehmer = function (key, teilnehmer) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit Teilnehmer',
            inputs: [{
                    name: 'title'
                }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.teilnehmerService.updateTeilnehmer(key, data.title);
                        /* let index = this.allPosten.indexOf(posten);
             
                         if (index > -1) {
                           this.notes[index] = data;
                         }*/
                    }
                }
            ]
        });
        prompt.present();
    };
    TeilnehmerPage.prototype.removeTeilnehmer = function (id) {
        this.teilnehmerService.deleteTeilnehmer(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TeilnehmerPage.prototype, "content", void 0);
    TeilnehmerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teilnehmer',template:/*ion-inline-start:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/teilnehmer/teilnehmer.html"*/'<!--\n  Generated template for the TeilnehmerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Teilnehmer</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="addTeilnehmer()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list no-padding>\n        <ion-item-sliding *ngFor="let teilnehmer of allTeilnehmer | async">\n          <ion-item>\n            {{teilnehmer.Vorname}} {{teilnehmer.Name}}\n          </ion-item>\n          <ion-item-options (ionSwipe)="removeTeilnehmer(teilnehmer.key)" side="right">\n            <button ion-button color="danger" icon-only (click)="removeTeilnehmer(teilnehmer.key)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="editTeilnehmer(teilnehmer.key, teilnehmer)" light>\n                <ion-icon name="paper"></ion-icon>\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/teilnehmer/teilnehmer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_teilnehmer_service_teilnehmer_service__["a" /* TeilnehmerServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TeilnehmerPage);
    return TeilnehmerPage;
}());

//# sourceMappingURL=teilnehmer.js.map

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/postendetail/postendetail.module": [
		441,
		2
	],
	"../pages/rangliste/rangliste.module": [
		442,
		1
	],
	"../pages/teilnehmer/teilnehmer.module": [
		443,
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
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teilnehmer_teilnehmer__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posten_posten__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rangliste_rangliste__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__teilnehmer_teilnehmer__["a" /* TeilnehmerPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__posten_posten__["a" /* PostenPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__rangliste_rangliste__["a" /* RanglistePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Teilnehmer" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Posten" tabIcon="basketball"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Rangliste"  tabIcon="trophy"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_posten_service_posten_service__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postendetail_postendetail__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostenPage = /** @class */ (function () {
    function PostenPage(navCtrl, postenService, keyboard, alertCtrl) {
        this.navCtrl = navCtrl;
        this.postenService = postenService;
        this.keyboard = keyboard;
        this.alertCtrl = alertCtrl;
        this.postendetailPage = __WEBPACK_IMPORTED_MODULE_4__postendetail_postendetail__["a" /* PostendetailPage */];
        this.newPosten = '';
        this.allPosten = this.postenService.getAllPosten();
    }
    PostenPage.prototype.addPosten = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add Posten',
            inputs: [{
                    name: 'title'
                }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (data.title.length === 0 || !data.title.trim()) {
                            console.log("empty");
                        }
                        else {
                            _this.postenService.addPosten(data.title).then(function () {
                                _this.newPosten = "";
                                _this.keyboard.close();
                                _this.content.scrollToBottom();
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    PostenPage.prototype.editPosten = function (key, posten) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit Note',
            inputs: [{
                    name: 'title'
                }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.postenService.updatePosten(key, data.title);
                        /* let index = this.allPosten.indexOf(posten);
             
                         if (index > -1) {
                           this.notes[index] = data;
                         }*/
                    }
                }
            ]
        });
        prompt.present();
    };
    PostenPage.prototype.removePosten = function (id) {
        this.postenService.deleteItem(id);
    };
    PostenPage.prototype.openPostenDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__postendetail_postendetail__["a" /* PostendetailPage */], {
            posten: item
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], PostenPage.prototype, "content", void 0);
    PostenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-posten',template:/*ion-inline-start:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/posten/posten.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Posten</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addPosten()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<!-- whats onScroll not yet implemented-->\n<ion-content > <!--(ionScroll)="onScroll($event)"-->\n  <ion-list no-padding>\n    <ion-item-sliding *ngFor="let posten of allPosten | async">\n      <ion-item (click)="openPostenDetail(posten)" detail-push>\n\n        {{posten.Name}}\n      </ion-item>\n      <ion-item-options (ionSwipe)="removePosten(posten.key)" side="right">\n        <button ion-button color="danger" icon-only (click)="removePosten(posten.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="editPosten(posten.key, posten)" light>\n            <ion-icon name="paper"></ion-icon>\n        </button>\n      </ion-item-options>\n      <!--ion-item-options (ionSwipe)="doneItem(item.key, !item.isDone)" side="left"> \n        <button ion-button *ngIf="!item.isDone" color="secondary" (click)="doneItem(item.key, !item.isDone)">Done</button> \n        <button ion-button *ngIf="item.isDone" color="dark" (click)="doneItem(item.key, !item.isDone)">Undo</button> \n      </ion-item-options-->\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/posten/posten.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_posten_service_posten_service__["a" /* PostenServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PostenPage);
    return PostenPage;
}());

//# sourceMappingURL=posten.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostenServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(101);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PostenServiceProvider = /** @class */ (function () {
    function PostenServiceProvider(afd) {
        this.afd = afd;
        this.postenRef = this.afd.list('/Posten/');
        this.allPosten = this.postenRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    PostenServiceProvider.prototype.getAllPosten = function () {
        return this.allPosten;
    };
    PostenServiceProvider.prototype.addPosten = function (newName) {
        return this.postenRef.push({ Name: newName });
    };
    PostenServiceProvider.prototype.updatePosten = function (key, newText) {
        return this.postenRef.update(key, { Name: newText });
    };
    // doneItem(key, status){
    //    return this.postenRef.update(key, {isDone: status});
    // }
    PostenServiceProvider.prototype.deleteItem = function (key) {
        this.postenRef.remove(key);
    };
    PostenServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PostenServiceProvider);
    return PostenServiceProvider;
}());

//# sourceMappingURL=posten-service.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(301);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_posten_posten__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_rangliste_rangliste__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_teilnehmer_teilnehmer__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_posten_service_posten_service__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_postendetail_postendetail__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_teilnehmer_service_teilnehmer_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// Initialize Firebase
var config = {
    apiKey: "AIzaSyAHYqg1dms1XFObxThuA3_rQWS4X8YybTs",
    authDomain: "postenlauf-e372d.firebaseapp.com",
    databaseURL: "https://postenlauf-e372d.firebaseio.com",
    projectId: "postenlauf-e372d",
    storageBucket: "postenlauf-e372d.appspot.com",
    messagingSenderId: "431303393950"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_posten_posten__["a" /* PostenPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_teilnehmer_teilnehmer__["a" /* TeilnehmerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_rangliste_rangliste__["a" /* RanglistePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_postendetail_postendetail__["a" /* PostendetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/postendetail/postendetail.module#PostendetailPageModule', name: 'PostendetailPage', segment: 'postendetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rangliste/rangliste.module#RanglistePageModule', name: 'RanglistePage', segment: 'rangliste', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teilnehmer/teilnehmer.module#TeilnehmerPageModule', name: 'TeilnehmerPage', segment: 'teilnehmer', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_posten_posten__["a" /* PostenPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_teilnehmer_teilnehmer__["a" /* TeilnehmerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_rangliste_rangliste__["a" /* RanglistePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_postendetail_postendetail__["a" /* PostendetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_posten_service_posten_service__["a" /* PostenServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_teilnehmer_service_teilnehmer_service__["a" /* TeilnehmerServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(278);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/marcoghilardelli/Documents/FHNW/ws6C/Code/postenlauf/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

},[281]);
//# sourceMappingURL=main.js.map