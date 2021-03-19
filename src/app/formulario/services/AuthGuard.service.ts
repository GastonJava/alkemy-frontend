import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private route: Router, private jwtHelper: JwtHelperService, private authservice: AuthService) {}

  // activar ahora
  canActivate(next: ActivatedRouteSnapshot) {

    const token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)) {

      let roles = next.data['RolesPermitidos'] as Array<string>;
      if(roles){
        if(this.authservice.rolesCoinciden(roles)){
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

 /*  chekearLogin(route: ActivatedRouteSnapshot, url: any): boolean{
    if(this.authservice.esUsuarioAutenticado){
      const userRole = this.authservice.traerRole();
      if(route.data.role && route.data.role.indexOf(userRole) === -1){
        this.route.navigate(["/principalform"]);
        return false;
      }

      return true;
    }
  } */

 
}