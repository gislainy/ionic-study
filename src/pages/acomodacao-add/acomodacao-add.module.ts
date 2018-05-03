import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcomodacaoAddPage } from './acomodacao-add';

@NgModule({
  declarations: [
    AcomodacaoAddPage,
  ],
  imports: [
    IonicPageModule.forChild(AcomodacaoAddPage),
  ],
})
export class AcomodacaoAddPageModule {}
