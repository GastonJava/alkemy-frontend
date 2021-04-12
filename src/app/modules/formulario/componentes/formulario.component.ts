import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { pipe } from "rxjs";
import { map } from "rxjs/operators";
import Swal from "sweetalert2";
import { Api_alkemyService } from "../services/api_alkemy.service";
import { AuthService } from "../services/auth.service";
import { IUser } from "../services/IUser";
/* import { Api_alkemyService } from "./services/api_alkemy.service";
import { AuthService } from "./services/auth.service";
import { IUser } from "./services/IUser"; */

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  /* public formGroup: FormGroup; */

  /* currentUser: IUser = {
    Email: null,
    Password: null,
    Rolnombre: null
  }; */

  inputs: FormGroup;

  onSuccessMessage: boolean;
  onErrorMessage: boolean;

  // lista select
  roles: any = ["Administrador", "Alumno"];

  constructor(
    public fb: FormBuilder,
    private srv: Api_alkemyService,
    private srvauthservice: AuthService,
    private router: Router,
    private http: HttpClient,
    private helper: JwtHelperService
  ) {}

  currentUser: IUser = {
    Email: null,
    Password: null,
    Rolnombre: null,
  };

  ngOnInit() {
    this.FormDataGroup();
  }

  FormDataGroup() {
    this.inputs = new FormGroup({
      Email: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required),
      Rolnombre: new FormControl("", Validators.required),
    });
  }

  get Email() {
    return this.inputs.get("Email");
  }

  get Pass() {
    return this.inputs.get("Password");
  }

  get rolNombre() {
    return this.inputs.get("Rolnombre");
  }

  login() {
    this.srv.loguearusuario(this.inputs.value).subscribe(
      (response) => {
       /*  this.onSuccessMessage = true; */
        this.onErrorMessage = false;

        const user = (<any>response).token;

        /* const user = (<any>response).token;
        localStorage.setItem("jwt", user); */

        /* console.log(user); */

        if (user) {
          localStorage.setItem("jwt", user);

          if (this.rolNombre.value == "Administrador") {
            Swal.fire({
              title: `<span style="color:#75BAFF">Bienvenido: ${this.Email.value} <p style = "color:green;">Logueado con exito</p> </span>`,
              text: "Redirigiendo...",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
              toast: true,
              timer: 3000,
              showConfirmButton: false,
              showCancelButton: false,
              position: 'top',
              timerProgressBar: true,

            });

            setTimeout(() => {
              this.router.navigate(["/adminprincipal"]);
            }, 5000);

          } else if (this.rolNombre.value == "Alumno") {
            
            Swal.fire({
              title: `<span style="color:#75BAFF">Bienvenido: Alumno: ${this.Email.value} <p style = "color:green;">Logueado con exito</p> </span>`,
              text: "Redirigiendo...",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
              toast: true,
              timer: 3000,
              showConfirmButton: false,
              showCancelButton: false,
              position: 'top',
              timerProgressBar: true,

            });


            setTimeout(() => {
              this.router.navigate(["/alumnoprincipal"]);
              /* this.router.navigate(["/consultaralumno"]); */
              /* this.router.navigate(["/registraralumno"]); */
            }, 5000);
          }
        }

       
        

      },
      (err) => {
         
        if(this.srvauthservice.esUsuarioAutenticado){
          
        }

         //error al loguearse contraseña o email incorrecto
         this.onErrorMessage = true;
         /* console.log(err) */
      } 
    );
  }

  /*  login() {
    this.srv.loguearusuario(this.inputs.value).subscribe((response) =>{
      const user = response;
      localStorage.setItem("jwt", response);
      console.log("respuesta: " + user);
      pipe(
        map((response: any) => {
          console.log("respuesta: " + response);
          
          if (user.result.succeeded) {
            this.onSuccessMessage = true;
            this.onErrorMessage = false;

            
            const decodedToken = this.helper.decodeToken(response.token);
            this.currentUser.Email = decodedToken.Email;
            this.currentUser.Password = decodedToken.Password;
            this.currentUser.Rolnombre = decodedToken.Rolnombre;

            if(this.rolNombre.value == "Administrador"){
              setTimeout(() => {
                this.router.navigate(["/adminprincipal"]);
              }, 5000)
      
            }else if(this.rolNombre.value == "Alumno"){
              setTimeout(() => {
                this.router.navigate(["/registraralumno"]);
              }, 5000)
            }

            return this.currentUser;
          }
        })
      )



    });
  } */
}
