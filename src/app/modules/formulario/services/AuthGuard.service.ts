import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Api_alkemyService } from "./api_alkemy.service";

import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private route: Router, private jwtHelper: JwtHelperService, private authservice: Api_alkemyService) {}

  // activar ahora
  canActivate(next: ActivatedRouteSnapshot) {

    const token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log("token es null aca por? : "+token);

      let roles = next.data['RolesPermitidos'] as Array<string>;
      console.log("roles de next lista ruta creo: "+roles);
      if(roles){
        if(this.authservice.rolesCoinciden(roles)){
          console.log("roles de ruta roles si coinciden: "+roles);
          return true;
        }else{
          this.route.navigate(["/principalform"]);
          return false;
        }
      }
      return true;
    }
    
    this.route.navigate(["/principalform"]);
    return false;
  }
 
}