import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { PhoneNumberComponent } from '../components/phone-number/phone-number';
import { DialHangupComponent } from '../components/dial-hangup/dial-hangup';
import { KeyboardComponent } from '../components/keyboard/keyboard';

import { CallsListProvider } from '../providers/calls-list/calls-list';

import { OrderByNumberPipe } from '../pipes/order-by-number/order-by-number';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '5596f201'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhoneNumberComponent,
    DialHangupComponent,
    KeyboardComponent,
    OrderByNumberPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallsListProvider
  ]
})
export class AppModule {}
