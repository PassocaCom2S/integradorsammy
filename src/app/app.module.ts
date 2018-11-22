import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Camera } from  '@ionic-native/camera';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ChamadoPoliciaPage } from '../pages/chamado-policia/chamado-policia';
import { ChamadoBombeiroPage } from '../pages/chamado-bombeiro/chamado-bombeiro';
import { ChamadoSamuPage } from '../pages/chamado-samu/chamado-samu';
import { LoginPage } from '../pages/login/login';
import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';
import { EmailPage } from '../pages/email/email';
import { SignupPage } from '../pages/signup/signup';
import { AttendancePage } from '../pages/attendance/attendance';
import { MyApp } from './app.component';
import { UserProvider } from '../providers/user/user';
import { ConfigProvider } from '../providers/config/config';
import { AttendanceProvider } from '../providers/attendance/attendance';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChamadoPoliciaPage,
    ChamadoBombeiroPage,
    ChamadoSamuPage,
    LoginPage,
    IntroPage,
    EmailPage,
    SignupPage,
    AttendancePage 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChamadoPoliciaPage,
    ChamadoBombeiroPage,
    ChamadoSamuPage,
    LoginPage,
    IntroPage,
    EmailPage,
    SignupPage,
    AttendancePage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ConfigProvider,
    AttendanceProvider
  ]
})
export class AppModule {}
