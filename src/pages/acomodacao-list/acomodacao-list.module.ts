import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcomodacaoListPage } from './acomodacao-list';

@NgModule({
  declarations: [
    AcomodacaoListPage,
  ],
  imports: [
    IonicPageModule.forChild(AcomodacaoListPage),
  ],
})
export class AcomodacaoListPageModule {}
