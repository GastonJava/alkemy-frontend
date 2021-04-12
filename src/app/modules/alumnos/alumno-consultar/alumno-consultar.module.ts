import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoConsultarRoutingModule } from './alumno-consultar-routing.module';
import { AlumnoConsultarComponent } from './componentes/alumno-consultar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AlumnoConsultarComponent],
  imports: [
    CommonModule,
    AlumnoConsultarRoutingModule,
    SharedModule
  ]
})
export class AlumnoConsultarModule { }
