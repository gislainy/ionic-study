import { NgModule,  } from '@angular/core';
import { PodeComponent } from './pode/pode';
import { TesteComponent } from './teste/teste';
@NgModule({
	declarations: [PodeComponent,
		TesteComponent],
	imports: [],
	exports: [PodeComponent,
		TesteComponent],

})
export class ComponentsModule { }
