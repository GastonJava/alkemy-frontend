import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FormularioComponent } from '../modules/formulario/componentes/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtmoduleModule } from './jwtmodule/jwtmodule.module';
import { NgBootstrapDatetimeAngularModule } from 'ng-bootstrap-datetime-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    NgBootstrapDatetimeAngularModule,
    Ng2SearchPipeModule, 
    TooltipModule,
    JwtmoduleModule,
  
  ], 
  exports: [
    ReactiveFormsModule,
    Ng2SearchPipeModule, 
    TooltipModule,
    NgBootstrapDatetimeAngularModule,
    JwtmoduleModule
  ]
})
export class SharedModule { }
