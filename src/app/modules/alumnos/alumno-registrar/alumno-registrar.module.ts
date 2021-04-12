import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRegistrarRoutingModule } from './alumno-registrar-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnoRegistrarComponent } from './componentes/alumno-registrar.component';

@NgModule({
  declarations: [AlumnoRegistrarComponent],
  imports: [
    CommonModule,
    AlumnoRegistrarRoutingModule,
    SharedModule
  ]
})
export class AlumnoRegistrarModule { }
