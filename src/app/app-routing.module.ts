import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoConsultarComponent } from './alumnos/alumno-consultar/alumno-consultar.component';
import { AlumnoRegistrarComponent } from './alumnos/alumno-registrar/alumno-registrar.component';
import { ArraypipePipe } from './alumnos/alumno-registrar/pipes/arraypipe.pipe';
import { FiltrarPipe } from './alumnos/alumno-registrar/pipes/filtrar.pipe';
import { SortListPipe } from './alumnos/alumno-registrar/pipes/sortList.pipe';
import { FormularioComponent } from './formulario/formulario.component';
import { NavbarComponent } from './paginas/navbar/navbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminComponent } from './admin/principal/admin.component';
import { RegistrarMateriaComponent } from './admin/registrar-materia/registrar-materia.component';
import { RegistrarProfesorComponent } from './admin/registrar-profesor/registrar-profesor.component';
import { DatoAlumnoComponent } from './admin/DatoAlumno/dato-alumno/dato-alumno.component';
import { NgBootstrapDatetimeAngularModule } from "ng-bootstrap-datetime-angular";
import { TooltipModule } from 'ng2-tooltip-directive';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuardService } from './formulario/services/AuthGuard.service';
import { FooterComponent } from './paginas/footer/footer.component';
import { AdminfooterComponent } from './paginas/footer/adminfooter/adminfooter.component';
import { Ng2FittextModule } from 'ng2-fittext';


export function tokenGetter() {
  return localStorage.getItem("jwt");
}

const routes: Routes = [
  {path: '', redirectTo: 'principalform', pathMatch: 'full' }, 
  {path: 'principalform', component: FormularioComponent},
  {path: 'consultaralumno', component: AlumnoConsultarComponent, canActivate: [AuthGuardService]}, // el alumno consultara las materias que se inscribio
  {path: 'registraralumno', component: AlumnoRegistrarComponent, canActivate: [AuthGuardService]}, // el alumno se registrara a las materias a rendir
  {path: 'adminprincipal', component: AdminComponent, canActivate: [AuthGuardService]},
  {path: 'alumnodata', component: DatoAlumnoComponent, canActivate: [AuthGuardService]},
  {path: 'regmateria', component: RegistrarMateriaComponent, canActivate: [AuthGuardService]},
  {path: 'regprofesor', component: RegistrarProfesorComponent, canActivate: [AuthGuardService], data:{RolesPermitidos:['Administrador']}}, 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    CommonModule,   FormsModule,  
     ReactiveFormsModule, 
     Ng2SearchPipeModule, 
     NgBootstrapDatetimeAngularModule,
     TooltipModule,
     Ng2FittextModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://localhost:44325"],
        disallowedRoutes: []
      }
     
    }),
  
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    AdminfooterComponent,
    AlumnoConsultarComponent,
    AlumnoRegistrarComponent,
    AdminComponent,
    RegistrarMateriaComponent,
    RegistrarProfesorComponent, 
    FormularioComponent,
    DatoAlumnoComponent,
    ArraypipePipe,
    FiltrarPipe,
    SortListPipe,

  ],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }