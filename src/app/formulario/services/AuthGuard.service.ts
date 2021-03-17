import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private route: Router, private jwtHelper: JwtHelperService, private authservice: AuthService) {}

  // activar ahora
  canActivate() {

    const token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }

   /*  if(this.authservice.esUsuarioAutenticado){
      return true;
    } */
    
    this.route.navigate(["/principalform"]);
    return false;
  }
}