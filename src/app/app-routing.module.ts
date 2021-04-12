import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './core/paginas/navbar/navbar.component';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuardService } from './modules/formulario/services/AuthGuard.service';
import { FooterComponent } from './core/paginas/footer/footer.component';
import { AdminfooterComponent } from './core/paginas/footer/adminfooter/adminfooter.component';
import { SidebarComponent } from './core/paginas/footer/sidebar/sidebar.component';



export function tokenGetter() {
  return localStorage.getItem("jwt");
}

const routes: Routes = [
    
  {path: 'principalform', loadChildren: () => import('./modules/formulario/formulario.module').then(m => m.FormularioModule), pathMatch: 'full' },

  {path: '', redirectTo: 'principalform', pathMatch: 'full' }, 

  {path: 'adminprincipal', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuardService], data :{RolesPermitidos:['Administrador']} },
  {path: 'alumnoprincipal', loadChildren: () => import('./modules/alumnos/alumnos.module').then(m => m.AlumnosModule), canActivate: [AuthGuardService], data :{RolesPermitidos:['Alumno']}}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    /* CommonModule, FormsModule,   */
    /*  ReactiveFormsModule,  */
    

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://localhost:44325"],
      /*  allowedDomains: ["https://localhost:9055"],  */
        disallowedRoutes: []
      }
     
    }),
  
  ],
  declarations: [
    /* NavbarComponent, */
    /* FooterComponent,
    AdminfooterComponent,
    SidebarComponent, */
  ],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }