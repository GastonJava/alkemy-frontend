import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../formulario/services/AuthGuard.service';
import { RegistrarMateriaComponent } from './componentes/registrar-materia.component';

const routes: Routes = [{
  path: '', component: RegistrarMateriaComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarMateriaRoutingModule { }
