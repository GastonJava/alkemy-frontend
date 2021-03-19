import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private router: Router, private jwtHelper: JwtHelperService) {}

  // AUTENTICACION Y COMPROBACION
  esUsuarioAutenticado(valor: string) {
    
    // booleano de comprobacion
    const token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
     /*  localStorage.setItem('ROLE', this.roles);
      console.log(); */
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem("jwt");
    this.router.navigate[("/principalform")];
  
  }

  rolesCoinciden(rolesPermitidos): boolean{
    var coincide = false;
    /* console.log(JSON.parse(window.atob(localStorage.getItem('jwt').split('.')[0]))); */
    var payload = JSON.parse(window.atob(localStorage.getItem('jwt').split('.')[1]));
    console.log(payload);
    var userRole = payload.role;
    console.log("esto es user role: "+userRole);
    /* console.log("esto es elemento: "+element); */
    rolesPermitidos.forEach(element => {
       if(userRole == element){
          coincide = true;
          console.log("elementos del array: "+element);
          console.log("roles coinciden");
          return false;
        }
    });
    console.log("Roles no coinciden");
    return coincide;
  }
 
}
