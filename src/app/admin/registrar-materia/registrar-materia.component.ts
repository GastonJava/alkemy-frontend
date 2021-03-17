import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TodoserviceService } from "src/app/servicios todos/todoservice.service";
import { IMateria } from "./Interface Materia/IMateria";


@Component({
  selector: "app-registrar-materia",
  templateUrl: "./registrar-materia.component.html",
  styleUrls: ["./registrar-materia.component.scss"],
})
export class RegistrarMateriaComponent implements OnInit {
  iscreated: boolean;
  inputs: FormGroup;

  docentedatos: any = [];
  materiadatos: IMateria;

  constructor(private srvmateria: TodoserviceService, private route: Router) {}

  ngOnInit() {
    this.FormDataGroup();
  }

  FormDataGroup() {
    return this.inputs = new FormGroup({
      Nombre: new FormControl("", Validators.required),
      Cuponmax_mat: new FormControl("", Validators.required),
      Fecha: new FormControl("", Validators.required),
      Ubicacion: new FormControl("", Validators.required),
      Dni_d: new FormControl("", Validators.required),
      Nombre_d: new FormControl("", Validators.required),
      Apellido_d: new FormControl("", Validators.required),
    });
  }

  get Nombre() {
    return this.inputs.get("Nombre");
  }
  get Cupomax_mat() {
    return this.inputs.get("Cuponmax_mat");
  }
  get Fecha() {
    return this.inputs.get("Fecha");
  }
  get Ubicacion() {
    return this.inputs.get("Ubicacion");
  }
  get Dni() {
    return this.inputs.get("Dni_d");
  }
  get Nombre_d() {
    return this.inputs.get("Nombre_d");
  }
  get Apellido_d() {
    return this.inputs.get("Apellido_d");
  }

  obtenerdocente() {
    this.srvmateria.buscarDocente(this.Dni.value).subscribe((data) => {
      this.docentedatos = data;

      if (this.docentedatos) {
       /*  console.log(this.docentedatos); */
      }
    });
  }

  addMateria() {
    console.log("agregar materia");
    this.srvmateria.registrarMateria(this.inputs.value).subscribe(
      (response) => {

        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.iscreated = false;
        this.route.navigate(["/registraralumno"]);
      },
      (error: HttpErrorResponse) => {
        this.iscreated = true;
        console.log(error);
      }
    );
  }
}
