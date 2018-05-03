import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanceiroReceitaAddPage } from './financeiro-receita-add';

@NgModule({
  declarations: [
    FinanceiroReceitaAddPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanceiroReceitaAddPage),
  ],
})
export class FinanceiroReceitaAddPageModule {}
