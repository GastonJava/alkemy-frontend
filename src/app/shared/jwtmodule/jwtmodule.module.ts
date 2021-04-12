import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from 'src/app/app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    /* JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://localhost:44325"],
        allowedDomains: ["https://localhost:9055"], 
        disallowedRoutes: []
      }
     
    }), */
  ]
})
export class JwtmoduleModule { }
