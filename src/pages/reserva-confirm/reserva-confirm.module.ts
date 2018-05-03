import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservaConfirmPage } from './reserva-confirm';

@NgModule({
  declarations: [
    ReservaConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservaConfirmPage),
  ],
})
export class ReservaConfirmPageModule {}
