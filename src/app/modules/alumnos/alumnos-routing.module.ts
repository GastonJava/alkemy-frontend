import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../formulario/services/AuthGuard.service';
import { AlumnoConsultarComponent } from './alumno-consultar/componentes/alumno-consultar.component';

const routes: Routes = [

  { path: 'consultarmateria', loadChildren: () => import('./alumno-consultar/alumno-consultar.module').then(m => m.AlumnoConsultarModule)},
  {path: '', redirectTo: 'consultarmateria', pathMatch: 'full' },

  { path: 'registrarmateria' , loadChildren: () => import('./alumno-registrar/alumno-registrar.module').then(m => m.AlumnoRegistrarModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
