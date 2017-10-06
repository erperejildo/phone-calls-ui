import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { PhoneNumberComponent } from '../components/phone-number/phone-number';
import { DialHangupComponent } from '../components/dial-hangup/dial-hangup';
import { KeyboardComponent } from '../components/keyboard/keyboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhoneNumberComponent,
    DialHangupComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
