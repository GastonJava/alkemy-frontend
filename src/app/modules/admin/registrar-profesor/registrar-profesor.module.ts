import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarProfesorRoutingModule } from './registrar-profesor-routing.module';
import { RegistrarProfesorComponent } from './componentes/registrar-profesor.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegistrarProfesorComponent],
  imports: [
    CommonModule,
    RegistrarProfesorRoutingModule,
    SharedModule
  ]
})
export class RegistrarProfesorModule { }
