import { getCurrencySymbol } from "@angular/common";
import { rendererTypeName } from "@angular/compiler";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
/* import gsap from "gsap"; */
import { Observable } from "rxjs";
import { AuthService } from "src/app/modules/formulario/services/auth.service";
import { TodoserviceService } from "src/app/shared/services/todoservice.service";
import Swal from "sweetalert2";
/* import { IMaterialista } from "./interfaces/IMaterialista"; */

@Component({
  selector: "app-alumno-registrar",
  templateUrl: "./alumno-registrar.component.html",
  styleUrls: ["./alumno-registrar.component.scss"],
})
export class AlumnoRegistrarComponent implements OnInit {
  datosExamen: any[];
  contLenght: any;
  materias: any;

  materiasconfirmadas: any = [];
  nombreMateriaConfirmada: any = [];
  nombreMateriaConfirmadatotal: any = [];
  nombreMateriaSeleccionado: any;
  contadorLiberarMemeoria: number = 0;
  yaExisteMateria: boolean;

  //ALUMNO: banderas para mostrar mensaje de agrego con exito la materia
  mostrarmensaje: boolean = false;

  // --------------------  //

  datos: any;

  // VARIABLE BUSQUEDA POR TITULO DE LA MATERIA INGLES, MATEMATICAS, ETC
  title = "";

  constructor(private srvlistamateria: TodoserviceService, private srvAuthserv: AuthService) {}

  ngOnInit() {
    this.buscarDatos();
    /* this.getMateriaConfirmada(); */
    /*  console.log(this.yaexistemateria); */
    /* this.contLenght = this.data.datosExamen.length; */
    /* console.log(this.datosotros.length); */
    /*  this.gsap();
    this.ocultarNav(); */
  }

  /* OBJETO CONFIGURAR EL TOOLTIP */
  tooltipconfig = {
    placement: "right",
    "show-delay": 360,
    theme: "light",
  };

  grupoFiltrar = new FormGroup({
    buscar: new FormControl(""),
  });

  obtenerDatos(data) {
    // PRESIONAMOS UNA CARD Y SE EJECUTA ESTE METODO DONDE PASAMOS DATOS
    this.nombreMateriaSeleccionado = data.nombre;

    if (data.id != 0) {
      // MODIFICAR EL ID SIEMPRE 0 PARA EVITAR ERROR IDENTITY OFF
      data.id = 0;
    }

    this.srvlistamateria.listaMateriasConfirmada().subscribe((response) => {
      /*   this.materiasconfirmadas = response; */

      for (var confirmada of response) {
        this.nombreMateriaConfirmada = confirmada.nombre;
        this.nombreMateriaConfirmadatotal.push(this.nombreMateriaConfirmada);
      }

      if (
        this.nombreMateriaConfirmadatotal.includes(
          this.nombreMateriaSeleccionado
        )
      ) {
        // SI EXISTE YA ESA MATERIA
        /* alert("Esa materia ya esta solicitada "); */

        Swal.fire({
          title: `<span style="color:#75BAFF">Ya tienes una solicitud pendiente <p style = "color:green; text-decoration:line-through"> ${data.nombre} </p> </span>`,
          text: "En consultas encontraras tus solicitudes",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else {
        // NO EXISTE ESA MATERIA
        setTimeout(() => {
          Swal.fire({
            title: `<span style="color:#75baff">Deseas, inscribir una solicitud para ${data.nombre} !</span>`,
            text: `La fecha a rendir es: ${data.fecha}`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Si, lo entiendo!",
            cancelButtonText: "Cancelar solicitud!",
            background: "#343a40",
            toast: false,
            width: "50%",
            target: "#cardinterior",
            customClass: {
              container: "position-absolute",
            },
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__rotateOutDownLeft",
            },

            position: "top",
            timerProgressBar: true,
          }).then((result) => {
            if (result.value) {
              this.srvlistamateria.materiaConfirmada(data).subscribe(
                (dato) => {
                  Swal.fire({
                    title:
                      '<span style="color:#75BAFF">Se ah guardado con exito!</span>',
                    timer: 2000,
                    icon: "success",
                    showConfirmButton: false,
                    confirmButtonText: "Genial",
                    background: "#343a40",
                    toast: false,
                    width: "40%",
                    target: "#cardinterior",
                    customClass: {
                      container: "position-absolute",
                    },
                    position: "top",
                    timerProgressBar: true,
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  });
                },

                (err) => {
                  console.log(err);
                }
              );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                /*
                  'Cancelled',
                  'No te has inscripto al examen',
                  'error',
                  */
                {
                  title: `<span style="color:#75BAFF">Se cancelo solicitud para rendir! <p style="color:red; text-decoration:line-through"> ${data.nombre}</p></span>`,
                  timer: 2000,
                  icon: "success",
                  showConfirmButton: false,
                  confirmButtonText: "Genial",
                  background: "#343a40",
                  toast: false,
                  width: "40%",
                  target: "#cardinterior",
                  customClass: {
                    container: "position-absolute",
                  },
                  position: "top",
                  timerProgressBar: true,
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                }
              );
            }
          });
        }, 1000);
      }
    });
  }

  // trae la lista de materias en tabla materias
  buscarDatos() {
    this.srvlistamateria.listaMaterias().subscribe(
      (response) => {
        this.materias = response;
        /* console.log("materias devuelveesto: "+this.materias); */
      },
      (error) => console.log(error)
    );
  }

  hoy = new Date();

  ocultarNav() {
    const navbar = document.querySelector(".sticky-top");

    let prev = window.pageYOffset;
    console.log("Start State for prev:" + prev);

    window.addEventListener("scroll", function () {
      let current = window.pageYOffset;

      console.log("Current State for current:" + current);

      if (prev < current) {
        navbar.classList.add("hide");
      } else {
        navbar.classList.remove("hide");
      }

      //But you want to show scroll up, you need to put current to prev.
      prev = current;
    });
  }

  salir(){
    console.log("click funciona ");
    this.srvAuthserv.logOut();
  }
}
