import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProfesor } from "src/app/modules/admin/registrar-profesor/Interface profesor/IProfesor";
import { IMateria } from "../../modules/admin/registrar-materia/Interface Materia/IMateria";

@Injectable({
  providedIn: "root",
})
export class TodoserviceService {
  headers = new Headers();
  urlbase: string;
  constructor(private http: HttpClient) {
    this.urlbase = "https://localhost:44325/";
    this.headers.append("Content-Type", "application/json");
    this.headers.append(
      "Authorization",
      "Bearer" + localStorage.getItem("jwt")
    );
  }

  // MATERIAS

  registrarMateria(materia: IMateria) {
    return this.http.post(
      /* "https://localhost:44325/api/Materia/addmateria", */
      this.urlbase+"api/Materia/addmateria",
      materia
    );
  }

  listaMateriasConfirmada(): Observable<any> {
    /* return this.http.get("https://localhost:44325/api/Materias_Confirmadas"); */
    return this.http.get(this.urlbase + "api/Materias_Confirmadas");
  }

  // Traer Lista de materias
  listaMaterias() {
    /* return this.http.get("https://localhost:44325/api/Materia/Listamaterias"); */
    return this.http.get(this.urlbase + "api/Materia/Listamaterias");
  }

  //ALUMNO CONFIRMA LA MATERIA A RENDIR
  materiaConfirmada(dato): Observable<any> {
    /* return this.http.post("https://localhost:44325/api/Materias_Confirmadas/confirmacion", dato); */
    return this.http.post(
      this.urlbase + "api/Materias_Confirmadas/confirmacion",
      dato
    );
  }

  // EL ALUMNO ELIMINARA LA MATERIA DESDE LA PAGINA CONSULTAR MATERIAS
  cancelarSubscripcion(id) {
    return this.http.delete(
      /* `https://localhost:44325/api/Materias_Confirmadas/${id}`); */
      `${this.urlbase}api/Materias_Confirmadas/${id}`
    );
  }

  buscarDocente(dni): Observable<any> {
    /* return this.http.get(`https://localhost:44325/api/Docente/${dni}`); */
    console.log("la url: "+this.urlbase);
    return this.http.get(`${this.urlbase}api/Docente/${dni}`);
  }

  /* MANEJO DE DOCENTES  */
  agregarDocente(profesor: IProfesor): Observable<any> {
    return this.http.post("https://localhost:44325/api/Gestiondocente", profesor, {
      headers: new HttpHeaders({
        "Content-Type" : "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }),
    });
    /* return this.http.post(this.urlbase + "api/Gestiondocente", datos); */
  }

  listadoDocente(){
    return this.http.get("https://localhost:44325/api/Gestiondocente/docentes", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }),
    });
  }

  traerAdmin(){
    return this.http.get("https://localhost:44325/api/Gestiondocente/docentes", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }),
    });
  }

}