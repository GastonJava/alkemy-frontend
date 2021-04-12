import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoConsultarComponent } from './componentes/alumno-consultar.component';

const routes: Routes = [
  {path: '', component: AlumnoConsultarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoConsultarRoutingModule { }
