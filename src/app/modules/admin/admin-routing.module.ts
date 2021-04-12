import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../formulario/services/AuthGuard.service';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule), 
  },
  {
    path: 'regmateria', loadChildren: () => import('./registrar-materia/registrar-materia.module').then(m => m.RegistrarMateriaModule),
     canActivate: [AuthGuardService], data :{RolesPermitidos:['Administrador']}
  },
  {
    path:'regprofesor', loadChildren: () => import('./registrar-profesor/registrar-profesor.module').then(m => m.RegistrarProfesorModule),
     canActivate: [AuthGuardService], data :{RolesPermitidos:['Administrador']}
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
