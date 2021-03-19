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

import { Api_alkemyService } from "./services/api_alkemy.service";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  /* public formGroup: FormGroup; */

  
  inputs: FormGroup;

  onSuccessMessage: boolean;
  onErrorMessage: boolean;

  // lista select
  roles: any = ["Administrador", "Alumno"];

  constructor(
    public fb: FormBuilder,
    private srv: Api_alkemyService,
    private router: Router, private http: HttpClient
  ) {}

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

  login(){
    this.srv.loguearusuario(this.inputs.value).subscribe((response) => {
      this.onSuccessMessage = true;
      this.onErrorMessage = false;
      
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);

      console.log(token);
      
      if(this.rolNombre.value == "Administrador"){
        setTimeout(() => {
          this.router.navigate(["/adminprincipal"]);
        }, 5000)

      }else if(this.rolNombre.value == "Alumno"){
        setTimeout(() => {
          this.router.navigate(["/registraralumno"]);
        }, 5000)
      }

    }, 
    (err) => console.log(err),
    
    );
  }


   // verificar login de admin
/*   login() {
    if (this.rolNombre.value == "Administrador") {
      console.log(this.inputs.value);
      this.srv.logearseAdmin(this.inputs.value).subscribe(
        (response) => {
          console.log(response);
          this.onSuccessMessage = true;
          this.onErrorMessage = false;

          const token = (<any>response).token;
          localStorage.setItem("jwt", token);
         
          console.log(token);
          
          setTimeout(() => {
            this.router.navigate(["/adminprincipal"]);
          }, 5000)

        },
        (error: HttpErrorResponse) => {
          (
            this.onSuccessMessage = false,
            this.onErrorMessage = true,
            
            setTimeout(() => {
              this.onErrorMessage = false;
            }, 3000)

          ), console.log(error);
        }
      );
    } else if (this.rolNombre.value == "Alumno") {

      this.srv.logearseAlumno(this.inputs.value).subscribe(
        (response) => {
          this.onSuccessMessage = true;
          this.onErrorMessage = false;
          const token = (<any>response).token;
          localStorage.setItem("jwt", token);
          

          console.log("el token: "+token);

          setTimeout(() => {
            this.router.navigate(["/registraralumno"]);
          }, 5000)

        },
        (error: HttpErrorResponse) => {
          (
            this.onSuccessMessage = false,
            this.onErrorMessage = true,

            setTimeout(() => {
              this.onErrorMessage = false;
            }, 3000)
             
            ), console.log(error);
        }
      );
    } else {
      console.log("no se selecciono select");
    }
  } */
}
