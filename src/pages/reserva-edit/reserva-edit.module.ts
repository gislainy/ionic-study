import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservaEditPage } from './reserva-edit';

@NgModule({
  declarations: [
    ReservaEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservaEditPage),
  ],
})
export class ReservaEditPageModule {}
