import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoserviceService } from 'src/app/shared/services/todoservice.service';


@Component({
  selector: 'app-registrar-profesor',
  templateUrl: './registrar-profesor.component.html',
  styleUrls: ['./registrar-profesor.component.scss']
})
export class RegistrarProfesorComponent implements OnInit {

  inputs: FormGroup;

  docenteRegistrado: boolean = false;

  constructor(private adminsrv: TodoserviceService) { }

  ngOnInit() {
    this.formDataGroups();
  }

  formDataGroups(){
    return this.inputs = new FormGroup({
      Dni: new FormControl("", Validators.required),
      Nombre: new FormControl("", Validators.required),
      Apellido: new FormControl("", Validators.required),
      Activo_docente: new FormControl("")
     /*  Activo: new FormControl("", Validators.required), */
     /*  Fecha: new FormControl("", Validators.required),  AGREGAR AL ULTIMO LA FECHA DE NACIMIENTO DEL DOCENTE*/
    });
  }

  get Dni() {
    return this.inputs.get("Dni");
  }

  get Nombre() {
    return this.inputs.get("Nombre");
  }

  get Apellido(){
    return this.inputs.get("Apellido");
  }
 

  resetForm(): void{
    this.inputs.reset();
  }

  addProfesor(){
   
      this.adminsrv.agregarDocente(this.inputs.value).subscribe((response) =>{
          console.log("me devolvio el response "+response);

         /*  const token = (<any>response).token;
          localStorage.setItem("jwt", token); */

          this.docenteRegistrado =  true;

          setTimeout(() => {
            this.docenteRegistrado = false;
          }, 2000);

          this.resetForm();


      }, (err) => {
        this.docenteRegistrado = false;
        console.log(err);
      });
  }



}