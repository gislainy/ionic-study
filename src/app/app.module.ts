import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { pode } from './app.permission';

const PageList = pode('userRamonId')
debugger

const componetes = PageList.map(p => p.component);
componetes.push(MyApp)
@NgModule({
  declarations: componetes,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: PageList
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents:componetes,
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
