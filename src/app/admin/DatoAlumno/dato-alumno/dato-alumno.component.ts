import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dato-alumno',
  templateUrl: './dato-alumno.component.html',
  styleUrls: ['./dato-alumno.component.scss']
})
export class DatoAlumnoComponent implements OnInit {
  alumnodata: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://localhost:44325/api/AlumnoInfo", {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
    .subscribe(response => {
      this.alumnodata = response; 
    },
    err => {
      console.log(err);
      }
    )
  }
}
