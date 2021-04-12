import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoserviceService } from 'src/app/shared/services/todoservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar-profesor',
  templateUrl: './registrar-profesor.component.html',
  styleUrls: ['./registrar-profesor.component.scss']
})
export class RegistrarProfesorComponent implements OnInit {

  inputs: FormGroup;

  docenteRegistrado: boolean = false;

  constructor(private adminsrv: TodoserviceService) { }

  docentes: any;
  totalDocente: number;
  cantactivos: any;

  noactivos: number;
  totalactivos: number = 0;
  findactivo: number;
  total: any;

  estadoMensaje: any = 0;

  estados: any = ["Activo", "No activo"];

  nombrepayload: any;

  ngOnInit() {

    this.formDataGroups();
    /* console.log(si funciona Estado:  + this.Estado); */
    this.enCambios();

    this.listaDocentes();


    var payload = JSON.parse(window.atob(localStorage.getItem('jwt').split('.')[1]));
    console.log(payload);
    console.log("el mail: " + payload.usernombre);
    this.nombrepayload = payload.usernombre;
  }


  formDataGroups() {
    return this.inputs = new FormGroup({
      Dni: new FormControl("", Validators.required),
      Nombre: new FormControl("", Validators.required),
      Apellido: new FormControl("", Validators.required),
      /* Activo_docente: new FormControl(`${this.estadoMensaje}`) */
      Activo_docente: new FormControl("", Validators.required) /* `${this.estadoMensaje}` */
    });
  }

  get Dni() {
    return this.inputs.get("Dni");
  }

  get Nombre() {
    return this.inputs.get("Nombre");
  }

  get Apellido() {
    return this.inputs.get("Apellido");
  }

  get Estado() {
    return this.inputs.get("Activo_docente");
  }


  /* DETECTAR CAMBIOS FROMULARIO */
 enCambios(): void {
    this.inputs.get("Activo_docente").valueChanges.subscribe(response => {
      if (response === "Activo") {
        
        const nuevovalor = {
          'Activo_docente' : 1
        }

        this.inputs.patchValue(nuevovalor);
        /* this.formDataGroups.controls["Activo"]("Activo").setValue(1); */

       /*  this.estadoMensaje = 1; */


        console.log("activado: " + this.estadoMensaje);

      } else if (response === "No activo") {

        const nuevovalor2 = {
          'Activo_docente' : 0
        }

        this.inputs.patchValue(nuevovalor2);
        
       /*  this.Estado.setValue(0);
        this.estadoMensaje = 0;

        console.log("activado: " + this.estadoMensaje); */

      }

     

    }, (err) => {

    })


  } 


  resetForm(): void {
    this.inputs.reset();
  }

  addProfesor() {

    this.adminsrv.agregarDocente(this.inputs.value).subscribe((response) => {
      

      /*  const token = (<any>response).token;
       localStorage.setItem("jwt", token); */

     /*  console.log(estados: + this.Estado); */

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego Docente Correctamente',
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(() => {
        this.listaDocentes();
      }, 2000);

      this.resetForm();
      console.log("me devolvio el response "+response);

    }, (err) => {
      this.docenteRegistrado = false;
      console.log("me dio error: "+err.value);
    });
  }

  /* TRAER LISTADO DE DOCENTES */
  listaDocentes() {
    this.adminsrv.listadoDocente().subscribe((response) => {
      /* console.log(response); */
      this.total = Object.values(response).length;
      this.cantactivos = Object.values(response);
      this.findactivo = this.cantactivos.filter(a => a.activo_docente === 1).length;
      this.noactivos = this.cantactivos.filter(a => a.activo_docente === 0).length;
    });
  }

}