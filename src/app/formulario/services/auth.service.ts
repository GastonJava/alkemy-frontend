import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private router: Router, private jwtHelper: JwtHelperService) {}

  // AUTENTICACION Y COMPROBACION
  esUsuarioAutenticado() {
    // booleano de comprobacion
    const token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem("jwt");
    this.router.navigate[("/principalform")];
  
  }

 
}
