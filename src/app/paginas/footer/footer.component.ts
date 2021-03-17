import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, Event, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Api_alkemyService } from 'src/app/formulario/services/api_alkemy.service';
import { AuthService } from 'src/app/formulario/services/auth.service';
import { TodoserviceService } from 'src/app/servicios todos/todoservice.service';
import { UrlbooleanService } from 'src/app/servicios todos/urlboolean.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  informacion: any;
  error: any;
  token: any;

  estamosenConsulta: Observable<boolean>;

  start: boolean;
  btnToggle: boolean;
  esAdmin: boolean;
  esAlumno: boolean;

  constructor(private http: HttpClient, private srvboolean: UrlbooleanService, private router: Router, private srvlogout: AuthService, private srvtestauthorize: Api_alkemyService) { }

  ngOnInit() {
    /* this.eventorouter(); */
    this.start = true;
    this.isAdminpage();
    this.isAlumnopage();
   
  }

  logout(){
    console.log("click");
    this.srvlogout.logOut();
  }

  ngOnDestroy(){
    this.esAlumno = false;
    this.esAdmin = false;
  }
  
  isAlumnopage(){
    if(this.router.url.match("/registraralumno") || this.router.url.match("/consultaralumno")){
        this.esAlumno = true;
    }

    return this.esAlumno;
  }

  isAdminpage(){
    if(this.router.url.match("/regprofesor") || this.router.url.match("/regmateria") || this.router.url.match("/adminprincipal")){
      this.esAdmin = true;
  }

    return this.esAdmin;
  }

  
  testingAuthorize(){
   
    this.token = localStorage.getItem('jwt');

    this.srvtestauthorize.testingAuthorize().subscribe((response) => {
      
      this.informacion = response;
    }, (error) => {
      this.error = error;
    });

  }

  obtenerinfoSoloAlumnos(){
    this.token = localStorage.getItem('jwt');

    this.srvtestauthorize.obtenerinfoSoloAlumnos().subscribe((response) => {
       console.log(response);
    }, (err) => {
      console.log(err);
    }
    );

  }


  eventorouter(){
    this.router.events.subscribe((evento: Event) => {

      if (evento instanceof NavigationStart) {
        
       
      }

    })
  }



  // collapsar el menu desplegable al presionar el boton
  openNav() {
    this.start = false;
    this.btnToggle = true;
    document.getElementById("footer-link1").style.display = "none";
    document.getElementById("title").style.display = "none";

    setTimeout(() => {
    document.getElementById("footer-link1").style.display = "block";
    document.getElementById("title").style.display = "block";
    }, 900);
     
    document.getElementById("abrirlinks").style.width = "230px"; 
    document.getElementById("abrirlinks").style.marginLeft = "0px"; 
    /* document.getElementById("menu").style.marginLeft = "250px"; */
      
  }
  
  closeNav() {
    this.btnToggle = false;
    document.getElementById("abrirlinks").style.width = "0";
    document.getElementById("abrirlinks").style.marginLeft = "100px"; 

    /* document.getElementById("menu").style.marginLeft= "0px"; */
   /*  document.getElementById("txt").style.visibility = "hidden"; */
  }

}
