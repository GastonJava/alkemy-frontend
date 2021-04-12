import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarMateriaRoutingModule } from './registrar-materia-routing.module';
import { RegistrarMateriaComponent } from './componentes/registrar-materia.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegistrarMateriaComponent],
  imports: [
    CommonModule,
    RegistrarMateriaRoutingModule,
    SharedModule
  ]
})
export class RegistrarMateriaModule { }
