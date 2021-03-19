import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class Api_alkemyService {

  headers = new HttpHeaders({
    /*   "Content-Type": "application/json", */
      Authorization: localStorage.getItem('jwt')
    });
  
    url: string = "https://localhost:44325/api/";
    constructor(private http: HttpClient) {
      /* this.headers.append("Content-Type", "application/json");
      this.headers.append("authorization", "Bearer "+localStorage.getItem('jwt')); */
    }
  
    loguearusuario(datos): Observable<any>{
      return this.http.post<any>("https://localhost:44325/api/Autenticar/user",datos);
    }
  
  
   /*  logearseAdmin(datos): Observable<any> {
      let direccion = this.url + "AlkemyRest";
      return this.http.post<any>("https://localhost:44325/api/Autenticar/admin", datos);
    } 
  
    logearseAlumno(form): Observable<any> {
      return this.http.post("https://localhost:44325/api/Autenticar/alumno", form);
    }
   */
  
    testingAuthorize(){
      console.log(localStorage.getItem('jwt')); 
      return this.http.get("https://localhost:44325/api/AlumnoInfo", {
        headers: new HttpHeaders(
        {       
          "Content-Type" : "application/json",
          Authorization : `Bearer ${localStorage.getItem('jwt')}`
        }
      )
      });
    }
  
    obtenerinfoSoloAlumnos(){
      return this.http.get("https://localhost:44325/api/AlumnoInfo/alumnoi", {
        headers: new HttpHeaders({
          "Content-Type" : "application/json",
          Authorization : `Bearer ${localStorage.getItem('jwt')}`
        }),
      });
    }
  
}