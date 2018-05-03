import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanceiroDespesaAddPage } from './financeiro-despesa-add';

@NgModule({
  declarations: [
    FinanceiroDespesaAddPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanceiroDespesaAddPage),
  ],
})
export class FinanceiroDespesaAddPageModule {}
