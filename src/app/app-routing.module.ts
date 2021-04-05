import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoConsultarComponent } from './modules/alumnos/alumno-consultar/alumno-consultar.component';
/* import { AlumnoRegistrarComponent } from './alumnos/alumno-registrar/alumno-registrar.component'; */
/*
import { ArraypipePipe } from './alumnos/alumno-registrar/pipes/arraypipe.pipe';
import { FiltrarPipe } from './alumnos/alumno-registrar/pipes/filtrar.pipe';
import { SortListPipe } from './alumnos/alumno-registrar/pipes/sortList.pipe';
*/
/* import { FormularioComponent } from './formulario/formulario.component'; */
import { NavbarComponent } from './core/paginas/navbar/navbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
/* import { AdminComponent } from './admin/principal/admin.component';
import { RegistrarMateriaComponent } from './admin/registrar-materia/registrar-materia.component';
import { RegistrarProfesorComponent } from './admin/registrar-profesor/registrar-profesor.component'; */
import { NgBootstrapDatetimeAngularModule } from "ng-bootstrap-datetime-angular";
import { TooltipModule } from 'ng2-tooltip-directive';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuardService } from './modules/formulario/services/AuthGuard.service';
import { FooterComponent } from './core/paginas/footer/footer.component';
import { AdminfooterComponent } from './core/paginas/footer/adminfooter/adminfooter.component';
import { SidebarComponent } from './core/paginas/footer/sidebar/sidebar.component';
import { FormularioComponent } from './modules/formulario/componentes/formulario.component';
import { AlumnoRegistrarComponent } from './modules/alumnos/alumno-registrar/componentes/alumno-registrar.component';
import { AdminComponent } from './modules/admin/principal/componentes/admin.component';
import { RegistrarMateriaComponent } from './modules/admin/registrar-materia/componentes/registrar-materia.component';
import { RegistrarProfesorComponent } from './modules/admin/registrar-profesor/componentes/registrar-profesor.component';


export function tokenGetter() {
  return localStorage.getItem("jwt");
}

const routes: Routes = [
  {path: '', redirectTo: 'principalform', pathMatch: 'full' }, 
  {path: 'principalform', component: FormularioComponent},
  {path: 'consultaralumno', component: AlumnoConsultarComponent}, // el alumno consultara las materias que se inscribio , canActivate: [AuthGuardService]
  {path: 'registraralumno', component: AlumnoRegistrarComponent, canActivate: [AuthGuardService], data :{RolesPermitidos:['Administrador', 'Alumno']}}, // el alumno se registrara a las materias a rendir
  {path: 'adminprincipal', component: AdminComponent, canActivate: [AuthGuardService], data :{RolesPermitidos:['Administrador']}},
 /*  {path: 'alumnodata', component: DatoAlumnoComponent, canActivate: [AuthGuardService]}, */
  {path: 'regmateria', component: RegistrarMateriaComponent, canActivate: [AuthGuardService], data :{RolesPermitidos:['Administrador']}},
  {path: 'regprofesor', component: RegistrarProfesorComponent, canActivate: [AuthGuardService], data :{RolesPermitidos:['Administrador']}}, 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    CommonModule,   FormsModule,  
     ReactiveFormsModule, 
     Ng2SearchPipeModule, 
     NgBootstrapDatetimeAngularModule,
     TooltipModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        /* allowedDomains: ["https://localhost:44325"], */
        allowedDomains: ["https://localhost:9055"],
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
    SidebarComponent,
/*  DatoAlumnoComponent, 
    ArraypipePipe,
    FiltrarPipe,
    SortListPipe,
*/
  ],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }