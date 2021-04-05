import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';


/* import { JwtHelperService } from "@auth0/angular-jwt"; */
import { IUser } from "./IUser";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class Api_alkemyService {
  constructor(private http: HttpClient, private helper: JwtHelperService) {
    /* this.headers.append("Content-Type", "application/json");
    this.headers.append("authorization", "Bearer "+localStorage.getItem('jwt')); */
    this.urlbase = "https://localhost:44325/";
  }

  /*  helper = new JwtHelperService(); */

  currentUser: IUser = {
    Email: null,
    Password: null,
    Rolnombre: null,
  };

  headers = new HttpHeaders({
    /*   "Content-Type": "application/json", */
    Authorization: localStorage.getItem("jwt"),
  });

  urlbase: string;

  loguearusuario(model: any): Observable<any> {
    return this.http.post(this.urlbase+"api/Autenticar/user", model)
    .pipe(catchError(this.manejoErrores));
  }

  //errores handler
  private manejoErrores(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error("Error lado del Cliente: ", errorResponse.error.message);
    } else {
      console.error("Error lado del Server: ",errorResponse);
    }

    return throwError(errorResponse.message || "Hay un problema con el servicio");

  }

  rolesCoinciden(rolesPermitidos): boolean {
   
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('jwt').split('.')[1]));
    var userRole = payLoad.role;
 

     rolesPermitidos.forEach(element => {
      //element trae el rol de la lista que tnemos en la ruta
    

      //userRole trae el role desde el token

      if (userRole == element) {

        isMatch = true;
        return false;
      }
    });
    
    return isMatch; 
  }

  testingAuthorize() {
    console.log(localStorage.getItem("jwt"));
    /* return this.http.get("https://localhost:44325/api/AlumnoInfo", */
    return this.http.get(this.urlbase + "api/AlumnoInfo", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }),
    });
  }

  obtenerinfoSoloAlumnos() {
    /* return this.http.get("https://localhost:44325/api/AlumnoInfo/alumnoi", { */
    return this.http.get(this.urlbase + "api/AlumnoInfo/alumnoi", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }),
    });
  }
}