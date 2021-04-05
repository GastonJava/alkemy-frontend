import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/modules/formulario/services/auth.service';
import { TodoserviceService } from 'src/app/shared/services/todoservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumno-consultar',
  templateUrl: './componentes/alumno-consultar.component.html',
  styleUrls: ['./componentes/alumno-consultar.component.scss']
})
export class AlumnoConsultarComponent implements OnInit {

  materias: any;

  constructor(private srvconsultar: TodoserviceService, private srvAuthserv: AuthService) { }

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
    width: "100%",
    
    title: `<span style="color:#75BAFF">Se eliminara peticion ${nombre} !</span>`,
    text: `No podras acceder a cursar ${nombre}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, lo entiendo!',
    cancelButtonText: 'Cancelar solicitud!', 
    background: '#343a40',
    toast: true,
    customClass: {
      container: 'container-alert',
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

  salir(){
    console.log("click funciona ");
    this.srvAuthserv.logOut();
  }
}



/* if(confirm("Seguro quieres cancelar tu examen?: "+nombre)){
     this.srvconsultar.cancelarSubscripcion(id).subscribe(() => {
       this.buscarDatos();
     })
   } */