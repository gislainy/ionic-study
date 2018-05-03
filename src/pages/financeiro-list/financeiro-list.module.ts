import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanceiroListPage } from './financeiro-list';

@NgModule({
  declarations: [
    FinanceiroListPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanceiroListPage),
  ],
})
export class FinanceiroListPageModule {}
