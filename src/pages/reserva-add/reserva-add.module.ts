import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservaAddPage } from './reserva-add';

@NgModule({
  declarations: [
    ReservaAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservaAddPage),
  ],
})
export class ReservaAddPageModule {}
