import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMateria } from '../admin/registrar-materia/Interface Materia/IMateria';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  
headers = new Headers();

constructor(private http: HttpClient) {
  this.headers.append("Content-Type", "application/json");
  this.headers.append("Authorization", "Bearer "+localStorage.getItem('jwt'));
}

// MATERIAS

registrarMateria(materia: IMateria) {
  return this.http.post(
    "https://localhost:44325/api/Materia/addmateria",
    materia
  );
}

listaMateriasConfirmada(): Observable<any>{ 
  return this.http.get("https://localhost:44325/api/Materias_Confirmadas");
 }

// Traer Lista de materias
listaMaterias(){ 
 return this.http.get("https://localhost:44325/api/Materia/Listamaterias");
}

 //ALUMNO CONFIRMA LA MATERIA A RENDIR
 materiaConfirmada(dato): Observable<any>{
  return this.http.post("https://localhost:44325/api/Materias_Confirmadas/confirmacion", dato);
}

// EL ALUMNO ELIMINARA LA MATERIA DESDE LA PAGINA CONSULTAR MATERIAS
cancelarSubscripcion(id) {
  return this.http.delete(
    `https://localhost:44325/api/Materias_Confirmadas/${id}`);
}


buscarDocente(dni): Observable<any> {
  return this.http.get(`https://localhost:44325/api/Docente/${dni}`);
}


/* MANEJO DE DOCENTES  */
agregarDocente(datos): Observable<any>{
  return this.http.post("https://localhost:44325/api/Gestiondocente", datos);
}


}
