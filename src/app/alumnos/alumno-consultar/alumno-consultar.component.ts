import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoserviceService } from 'src/app/servicios todos/todoservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumno-consultar',
  templateUrl: './alumno-consultar.component.html',
  styleUrls: ['./alumno-consultar.component.scss']
})
export class AlumnoConsultarComponent implements OnInit {

  materias: any;

  constructor(private srvconsultar: TodoserviceService) { }

  title = '';

  ngOnInit() {
    /* this.consultarMateria(); */
    this.buscarDatos();
  }

  // buscar por titulo de la materia
  grupoFiltrar = new FormGroup({
    buscar: new FormControl(''),
  });

  buscarDatos(){
    this.srvconsultar.listaMateriasConfirmada().subscribe((response) => {
      this.materias= response;
     /*  console.log(this.materias); */
    },
    (error) => console.log(error)
    );
  }

  /*
  consultarMateria(){
    console.log(this.materias);
    this.srv.listaMateriasConfirmada().subscribe((response)=> {
      this.materias = response;

    })
  }
*/

//eliminar materia de la consulta 
eliminar(id, nombre){
  /*  console.log(id); */

  Swal.fire({
    
    title: `<span style="color:#75BAFF">Se eliminara peticion ${nombre} !</span>`,
    text: `No podras acceder a cursar ${nombre}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, lo entiendo!',
    cancelButtonText: 'Cancelar solicitud!', 
    background: '#343a40',
    toast: false,
    width: '50%',
    target: '#cardinterior',
    customClass: {
      container: 'position-absolute',
    },

    position: 'top',
    timerProgressBar: true,



  }).then((result) => {


    /* Read more about isConfirmed, isDenied below */
    
    if(result.value){

      Swal.fire(
        `Eliminado. ${nombre}`,
        'Eso te pasa por no estudiar',
        'success'
      ).then(() =>{
        this.srvconsultar.cancelarSubscripcion(id).subscribe(() => {
          this.buscarDatos();
        })
      })

    } else if(result.dismiss === Swal.DismissReason.cancel){

       Swal.fire(
         'Cancelled',
         'Sabia que no defraudarias, Ve por ese examen rey!',
         'error'
       )

    }


  })

 
  }
}

/* if(confirm("Seguro quieres cancelar tu examen?: "+nombre)){
     this.srvconsultar.cancelarSubscripcion(id).subscribe(() => {
       this.buscarDatos();
     })
   } */