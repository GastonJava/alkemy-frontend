import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnoConsultarComponent } from './alumno-consultar/componentes/alumno-consultar.component';
import { AlumnoRegistrarComponent } from './alumno-registrar/componentes/alumno-registrar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    /* SharedModule */
  ]
})
export class AlumnosModule { }
