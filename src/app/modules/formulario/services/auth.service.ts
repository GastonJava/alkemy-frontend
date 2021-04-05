import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: "root",
})
export class AuthService {

  constructor(private router: Router, private jwtHelper: JwtHelperService) {}
  
  token: string;

  // AUTENTICACION Y COMPROBACION
  esUsuarioAutenticado(valor: string) {
    
    // booleano de comprobacion
    this.token = localStorage.getItem("jwt")
    if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
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
