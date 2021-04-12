import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { AdminComponent } from './componentes/admin.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    SharedModule
  ]
})
export class PrincipalModule { }
