import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarProfesorComponent } from './componentes/registrar-profesor.component';

const routes: Routes = [
  {path: '', component: RegistrarProfesorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarProfesorRoutingModule { }
