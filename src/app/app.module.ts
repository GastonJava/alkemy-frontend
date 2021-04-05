import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/paginas/footer/footer.component';
/* import { AlumnoRegistrarComponent } from './alumnos/alumno-registrar/alumno-registrar.component'; */
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './shared/loader/loader.component';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './modules/formulario/services/AuthGuard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
