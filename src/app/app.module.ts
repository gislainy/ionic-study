import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { menuList } from './app.permission';

import { PodeComponent } from '../components/pode/pode'
import { TesteComponent } from '../components/teste/teste'
const PageList = menuList('userJoseId')

const componetes = PageList.map(p => p.component);
componetes.push(MyApp)
componetes.push(TesteComponent)
componetes.push(PodeComponent)
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
