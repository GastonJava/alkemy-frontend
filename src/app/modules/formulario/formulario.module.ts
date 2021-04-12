import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './componentes/formulario.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    SharedModule
  ]
})
export class FormularioModule { }
