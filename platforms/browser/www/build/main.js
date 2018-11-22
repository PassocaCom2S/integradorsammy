webpackJsonp([7],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChamadoBombeiroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(49);
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
 * Generated class for the ChamadoBombeiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChamadoBombeiroPage = /** @class */ (function () {
    function ChamadoBombeiroPage(navCtrl, navParams, geolocation, formBuilder, toastCtrl, camera, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.userProvider = userProvider;
        //Variaveis para utilização da camera.
        this.photo = '';
        this.chamado = this.formBuilder.group({
            vitima: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
        this.getUser();
    }
    //Metodo GET para recuperar dos dados do usuário.
    ChamadoBombeiroPage.prototype.getUser = function () {
        var _this = this;
        this.userProvider.getUser().then(function (data) {
            _this.user = data;
            console.log(_this.user);
        });
    };
    //Metodo para capturar uma imagem com a câmera.
    ChamadoBombeiroPage.prototype.takePicture = function () {
        var _this = this;
        this.photo = '';
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 100,
            targetHeight: 100
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            var base64image = 'data:image/jpeg;base64,' + imageData;
            _this.photo = base64image;
        }, function (error) {
            console.error(error);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    //ToastController para exibir um mensagem de "Chamado concluido com sucesso"
    ChamadoBombeiroPage.prototype.concluirChamado = function () {
        var toast = this.toastCtrl.create({
            message: 'Requisição enviada com sucesso! Favor aguarde no lugar até a chegada de socorro.',
            duration: 4000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ChamadoBombeiroPage.prototype.dadosChamado = function () {
        console.log(this.chamado.value);
    };
    //Metodo para carregar o "Mini mapa" com base nas coordenadas.
    ChamadoBombeiroPage.prototype.loadMap = function () {
        var mapOptions = {
            camera: {
                target: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */].create('map', mapOptions);
        var marker = this.map.addMarkerSync({
            title: 'Me',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: this.latitude,
                lng: this.longitude
            }
        });
        marker.showInfoWindow();
    };
    ChamadoBombeiroPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            _this.resp_coords = resp.coords;
            console.log(_this.resp_coords);
            _this.latitude = _this.resp_coords.latitude;
            _this.longitude = _this.resp_coords.longitude;
            _this.loadMap();
            var watch = _this.geolocation.watchPosition();
            watch.subscribe(function (resp) {
                _this.resp_coords = resp.coords;
                _this.latitude = _this.resp_coords.latitude;
                _this.longitude = _this.resp_coords.longitude;
                _this.loadMap();
            }, function (error) {
                console.log(error);
            });
        }).catch(function (error) {
            console.log('Erro ao recuperar sua posição', error);
        });
    };
    ChamadoBombeiroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chamado-bombeiro',template:/*ion-inline-start:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/chamado-bombeiro/chamado-bombeiro.html"*/'<!--\n  Generated template for the ChamadoBombeiroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhes da Ocorrência</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="padding">\n\n  <!-- <ion-list>\n    <ion-item *ngFor="let user of users">\n      <h2>{{user.name}}</h2>\n      <p>{{user.gender}}</p>\n    </ion-item>\n  </ion-list> -->\n\n  <!-- <p>Latitude: {{latitude}}</p>\n  <p>Longitude: {{longitude}}</p> -->\n  <h2 >Local da Ocorrência</h2>\n  <div #map id="map"></div>\n\n\n    <form [formGroup]="chamado" (ngSubmit)="dadosChamado()">\n    <div class="form">\n      <ion-item  class="item">\n        <ion-label>Você é a vitima?</ion-label>\n        <ion-toggle color="danger" formControlName="vitima"></ion-toggle>\n      </ion-item>\n\n\n    </div>\n    \n\n      <button ion-button round block color="secondary" type="submit" (click)="concluirChamado()" class="space">Solicitar serviço - Bombeiro</button>\n\n    </form>\n\n  </ion-content>\n'/*ion-inline-end:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/chamado-bombeiro/chamado-bombeiro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]])
    ], ChamadoBombeiroPage);
    return ChamadoBombeiroPage;
}());

//# sourceMappingURL=chamado-bombeiro.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChamadoPoliciaPage; });
/* unused harmony export Call */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChamadoPoliciaPage = /** @class */ (function () {
    function ChamadoPoliciaPage(navCtrl, navParams, userProvider, geolocation, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.geolocation = geolocation;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.chamado = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            'vitima': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](true, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
        });
        this.chamado = this.formBuilder.group({
            vitima: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
    }
    ChamadoPoliciaPage.prototype.concluirChamado = function () {
        var toast = this.toastCtrl.create({
            message: 'Requisição enviada com sucesso! Favor aguarde no lugar até a chegada de socorro.',
            duration: 5000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ChamadoPoliciaPage.prototype.dadosChamado = function () {
        var _this = this;
        var lonlat = this.latitude + " " + this.longitude;
        var data = new Date().toISOString();
        var tempo = data.split('T');
        var dia = tempo[0];
        var hora = tempo[1];
        var call = {
            'call': {
                'date': dia,
                'time': hora,
                'local': lonlat,
                'user': '1'
            }
        };
        this.userProvider.addCall(call).then(function (result) {
            _this.toastCtrl
                .create({ message: 'Chamado criado com sucesso!', duration: 5000 }).present();
        }).catch(function (error) {
            _this.toastCtrl
                .create({ message: 'Falha ao criar chamada: ' + error.error, duration: 5000 }).present();
            console.log(error);
        });
    };
    ChamadoPoliciaPage.prototype.loadMap = function () {
        var mapOptions = {
            camera: {
                target: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */].create('map', mapOptions);
        var marker = this.map.addMarkerSync({
            title: 'Me',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: this.latitude,
                lng: this.longitude
            }
        });
        this.latitude = mapOptions.camera.target.lat;
        this.longitude = mapOptions.camera.target.lon;
        marker.showInfoWindow();
    };
    ChamadoPoliciaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            _this.resp_coords = resp.coords;
            console.log(_this.resp_coords);
            _this.latitude = _this.resp_coords.latitude;
            _this.longitude = _this.resp_coords.longitude;
            _this.loadMap();
            var watch = _this.geolocation.watchPosition();
            watch.subscribe(function (resp) {
                _this.resp_coords = resp.coords;
                _this.latitude = _this.resp_coords.latitude;
                _this.longitude = _this.resp_coords.longitude;
                _this.loadMap();
            }, function (error) {
                console.log(error);
            });
        }).catch(function (error) {
            console.log('Erro ao recuperar sua posição', error);
        });
    };
    ChamadoPoliciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chamado-policia',template:/*ion-inline-start:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/chamado-policia/chamado-policia.html"*/'<!--\n  Generated template for the ChamadoPoliciaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhes da Ocorrência</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="padding">\n\n  <!-- <ion-list>\n    <ion-item *ngFor="let user of users">\n      <h2>{{user.name}}</h2>\n      <p>{{user.gender}}</p>\n    </ion-item>\n  </ion-list> -->\n\n  <!-- <p>Latitude: {{latitude}}</p>\n  <p>Longitude: {{longitude}}</p> -->\n  <h2>Local da Ocorrência</h2>\n\n    <div #map id="map"></div>\n\n\n\n  <form [formGroup]="chamado" (ngSubmit)="dadosChamado()">\n  <div class="form">\n    <ion-item  class="item">\n      <ion-label>Você é a vitima?</ion-label>\n      <ion-toggle color="danger" formControlName="vitima" ></ion-toggle>\n    </ion-item>\n\n\n  </div>\n    \n\n    <button ion-button round block color="secondary" type="submit" (click)="concluirChamado()" class="space">Solicitar serviço - Polícia</button>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/chamado-policia/chamado-policia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], ChamadoPoliciaPage);
    return ChamadoPoliciaPage;
}());

var Call = /** @class */ (function () {
    function Call(date, time, local, user_id) {
        this.date = date;
        this.time = time;
        this.local = local;
        this.user_id = user_id;
    }
    return Call;
}());

//# sourceMappingURL=chamado-policia.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChamadoSamuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
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
 * Generated class for the ChamadoSamuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChamadoSamuPage = /** @class */ (function () {
    function ChamadoSamuPage(navCtrl, navParams, geolocation, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.chamado = this.formBuilder.group({
            vitima: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
    }
    ChamadoSamuPage.prototype.concluirChamado = function () {
        var toast = this.toastCtrl.create({
            message: 'Requisição enviada com sucesso! Favor aguarde no lugar até a chegada de socorro.',
            duration: 4000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ChamadoSamuPage.prototype.dadosChamado = function () {
        console.log(this.chamado.value);
    };
    ChamadoSamuPage.prototype.loadMap = function () {
        var mapOptions = {
            camera: {
                target: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */].create('map', mapOptions);
        var marker = this.map.addMarkerSync({
            title: 'Me',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: this.latitude,
                lng: this.longitude
            }
        });
        marker.showInfoWindow();
    };
    ChamadoSamuPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            _this.resp_coords = resp.coords;
            console.log(_this.resp_coords);
            _this.latitude = _this.resp_coords.latitude;
            _this.longitude = _this.resp_coords.longitude;
            _this.loadMap();
            var watch = _this.geolocation.watchPosition();
            watch.subscribe(function (resp) {
                _this.resp_coords = resp.coords;
                _this.latitude = _this.resp_coords.latitude;
                _this.longitude = _this.resp_coords.longitude;
                _this.loadMap();
            }, function (error) {
                console.log(error);
            });
        }).catch(function (error) {
            console.log('Erro ao recuperar sua posição', error);
        });
    };
    ChamadoSamuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chamado-samu',template:/*ion-inline-start:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/chamado-samu/chamado-samu.html"*/'<!--\n  Generated template for the ChamadoSamuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhes da Ocorrência</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="padding">\n\n  <!-- <ion-list>\n    <ion-item *ngFor="let user of users">\n      <h2>{{user.name}}</h2>\n      <p>{{user.gender}}</p>\n    </ion-item>\n  </ion-list> -->\n\n  <!-- <p>Latitude: {{latitude}}</p>\n  <p>Longitude: {{longitude}}</p> -->\n  <h2 >Local da Ocorrência</h2>\n  <div #map id="map"></div>\n\n  <form [formGroup]="chamado" (ngSubmit)="dadosChamado()">\n  <div class="form">\n    <ion-item  class="item">\n      <ion-label>Você é a vitima?</ion-label>\n      <ion-toggle color="danger" formControlName="vitima"></ion-toggle>\n    </ion-item>\n\n\n  </div>\n    \n\n    <button ion-button round block color="secondary" type="submit" (click)="concluirChamado()" class="space">Solicitar serviço - SAMU</button>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/chamado-samu/chamado-samu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], ChamadoSamuPage);
    return ChamadoSamuPage;
}());

//# sourceMappingURL=chamado-samu.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(83);
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
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailPage = /** @class */ (function () {
    function EmailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailPage');
    };
    EmailPage.prototype.abrirHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    EmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email',template:/*ion-inline-start:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/email/email.html"*/'<!--\n  Generated template for the EmailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>email</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>\n    Um codigo de <b>verificação</b> foi ecaminhado para seu e-mail,\n    favor inserir o codigo no campo abaixo para completar seu cadastro.\n  </p>\n\n  <ion-item class="code-input">\n    <ion-label color="primary">Codigo:</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <button ion-button class="send-button" color="secondary" (click)="abrirHome()">Enviar</button>\n\n</ion-content>'/*ion-inline-end:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/email/email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(54);
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
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.abrirLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/intro/intro.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="bg-image">\n\n  <ion-slides pager>\n\n    <ion-slide class="slide-image">\n      <img src="../../assets/imgs/heart.jpg" alt="coração">\n      <h2>\n        Bem-vindo ao SaveUS!\n      </h2>\n      <p>\n        Seu novo aplicativo para os momentos inesperados de sua vida.\n      </p>\n    </ion-slide>\n\n    <ion-slide class="slide-image">\n      <img src="../../assets/imgs/tool.jpg" alt="coração">\n      <h2>\n        Uma ferramente poderosa!\n      </h2>\n      <p>\n        Disponibiliza uma rápida resposta de ajuda das autoridades locais.\n      </p>\n    </ion-slide>\n\n    <ion-slide class="slide-image">\n      <img src="../../assets/imgs/hands.png" alt="coração">\n      <h2>\n        Utilize com responsabilidade!\n      </h2>\n      <p>\n        Atenção ! É fundamental o uso consciente dessa ferramenta, pois,\n        o indivíduo que declarar informações falsas estará sujeito \n        a ser autuado segundo o Art-340 do código penal.\n      </p>\n      <button ion-button round (click)="abrirLogin()">Continuar</button>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_email__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder, userProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.cadastro = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required])],
            cpf: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required])],
            birthday: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            bloodType: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
    }
    SignupPage.prototype.createUser = function () {
        var _this = this;
        // console.log(this.cadastro.value.name);
        // console.log(this.model['name']);
        var data = {
            'user': {
                'name': this.cadastro.value.name,
                'cpf': this.cadastro.value.cpf,
                'gender': this.cadastro.value.gender,
                'birthday': this.cadastro.value.birthday,
                'bloodType': this.cadastro.value.bloodType,
                'email': this.cadastro.value.email,
                'password': this.cadastro.value.password
            }
        };
        this.userProvider.addUser(data).then(function (result) {
            _this.toastCtrl.create({ message: 'Contato criado com sucesso! Entre no sistema com seus dados, email e senha.', duration: 5000 }).present();
        }).catch(function (error) {
            _this.toastCtrl.create({ message: 'Falha ao criar contato: ' + error.error, duration: 5000 }).present();
            console.log(error);
        });
    };
    SignupPage.prototype.dadosUsuario = function () {
        console.log(this.cadastro.value);
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.abrirEmail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__email_email__["a" /* EmailPage */]);
    };
    SignupPage.prototype.abrirLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="fundo">\n\n  <form [formGroup]="cadastro" (ngSubmit)="dadosUsuario()"  class="formularios">\n\n    <ion-item  class="formulario">\n      <ion-label color="dark" floating>Nome completo</ion-label>\n      <ion-input type="text" formControlName="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="dark" floating>CPF</ion-label>\n      <ion-input type="text" formControlName="cpf"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="dark" floating>Nascimento</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" formControlName="birthday"></ion-datetime>\n    </ion-item><br>\n\n    <ion-item>\n      <ion-label color="dark">Tipo Sanguíneo</ion-label>\n      <ion-select formControlName="bloodType">\n        <ion-option value="positivoA">A+</ion-option>\n        <ion-option value="negativoA">A-</ion-option>\n        <ion-option value="positivoB">B+</ion-option>\n        <ion-option value="negativoB">B-+</ion-option>\n        <ion-option value="positivoO">O+</ion-option>\n        <ion-option value="negativoO">O-</ion-option>\n        <ion-option value="positivoAB">AB+</ion-option>\n        <ion-option value="negativoAB">AB-</ion-option>\n      </ion-select>\n    </ion-item><br>\n\n    <ion-item>\n      <ion-label color="dark">Sexo</ion-label>\n      <ion-select formControlName="gender">\n        <ion-option value="F">Feminino</ion-option>\n        <ion-option value="M">Masculino</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="dark" floating>E-mail</ion-label>\n      <ion-input type="email" formControlName="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="dark" floating>Senha</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="dark" floating>Repetir senha</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n\n    <button ion-button round color="light" type="submit" [disabled]="!cadastro.valid" (click)="createUser()" (click)="abrirLogin()" class="button">Cadastrar-se</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chamado-bombeiro/chamado-bombeiro.module": [
		287,
		6
	],
	"../pages/chamado-policia/chamado-policia.module": [
		288,
		5
	],
	"../pages/chamado-samu/chamado-samu.module": [
		289,
		4
	],
	"../pages/email/email.module": [
		290,
		3
	],
	"../pages/intro/intro.module": [
		291,
		2
	],
	"../pages/login/login.module": [
		292,
		1
	],
	"../pages/signup/signup.module": [
		293,
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chamado_policia_chamado_policia__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chamado_bombeiro_chamado_bombeiro__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chamado_samu_chamado_samu__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_email_email__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_user__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chamado_policia_chamado_policia__["a" /* ChamadoPoliciaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chamado_bombeiro_chamado_bombeiro__["a" /* ChamadoBombeiroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chamado_samu_chamado_samu__["a" /* ChamadoSamuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chamado-bombeiro/chamado-bombeiro.module#ChamadoBombeiroPageModule', name: 'ChamadoBombeiroPage', segment: 'chamado-bombeiro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chamado-policia/chamado-policia.module#ChamadoPoliciaPageModule', name: 'ChamadoPoliciaPage', segment: 'chamado-policia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chamado-samu/chamado-samu.module#ChamadoSamuPageModule', name: 'ChamadoSamuPage', segment: 'chamado-samu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chamado_policia_chamado_policia__["a" /* ChamadoPoliciaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chamado_bombeiro_chamado_bombeiro__["a" /* ChamadoBombeiroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chamado_samu_chamado_samu__["a" /* ChamadoSamuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_user_user__["a" /* UserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__ = __webpack_require__(109);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__["a" /* IntroPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/carloswosiak/Desktop/int/app/save-us/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/carloswosiak/Desktop/int/app/save-us/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        this.http = http;
        // URL externa, no caso do integrador será a url do nosso projeto no heroku
        this.apiUrl = 'https://save-us.herokuapp.com';
        console.log('Hello UserProvider Provider');
    }
    //Metodo GET para capturar dados do herokuapp
    UserProvider.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/users.json').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    //Metodo POST para enviar dados para o herokuapp
    UserProvider.prototype.addUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/users.json', data).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserProvider.prototype.addCall = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log(data);
            _this.http.post(_this.apiUrl + '/calls.json', data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
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
    function LoginPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.login = this.formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            senha: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
        });
    }
    LoginPage.prototype.dadosLogin = function () {
        console.log(this.login.value);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.abrirHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.abrirSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar hideBackButton class="titulo">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding class="fundo">\n\n\n\n  <div class="conteudo">\n  <form [formGroup]="login" (ngSubmit)="dadosLogin()">\n\n    <img src="../../assets/imgs/saveus.png" alt="saveus" style="margin-top:30%;">\n\n    <ion-item  class="labels">\n      <ion-input type="text" placeholder="E-mail" formControlName="nome"></ion-input>\n    </ion-item>\n\n    <ion-item class="labels">\n      <ion-input type="password" placeholder="Senha" formControlName="senha"></ion-input>\n    </ion-item>\n\n    <button ion-button round color="primary" type="submit" [disabled]="!login.valid" (click)="abrirHome()" class="buttons">Entrar</button>\n\n  </form>\n\n  <button ion-button round color="dark" (click)="abrirSignup()"  class="buttons">Cadastrar-se</button>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chamado_policia_chamado_policia__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chamado_bombeiro_chamado_bombeiro__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chamado_samu_chamado_samu__ = __webpack_require__(107);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = HomePage_1;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.chamadoPolicia = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chamado_policia_chamado_policia__["a" /* ChamadoPoliciaPage */]);
    };
    HomePage.prototype.chamadoBombeiro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chamado_bombeiro_chamado_bombeiro__["a" /* ChamadoBombeiroPage */]);
    };
    HomePage.prototype.chamadoSamu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chamado_samu_chamado_samu__["a" /* ChamadoSamuPage */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pagina inicial\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="fundo">\n  <img src="../../assets/imgs/saveus.png" alt="saveus" class="img-save-us">\n\n    <button ion-button  color="dark" (click)="chamadoPolicia()" outline class="buttons">\n      <div class="imgs">\n        <img src="../../assets/imgs/policia.png" alt="policia" width="200">\n      </div>\n      <h2 class="h2">POLÍCIA</h2></button>\n\n\n    <button ion-button  color="dark" (click)="chamadoBombeiro()" outline class="buttons">\n      <div  class="imgs">\n        <img src="../../assets/imgs/bombeiro.png" alt="bombeiro" width="200">\n      </div>\n      <h2 class="h2">BOMBEIRO</h2></button>\n\n\n\n    <button ion-button  color="dark" (click)="chamadoSamu()" outline class="buttons">\n      <div  class="imgs">\n        <img src="../../assets/imgs/samu.png" alt="samu" width="200">\n      </div>\n        <h2 class="h2"> SAMU</h2> </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/carloswosiak/Desktop/int/app/save-us/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map