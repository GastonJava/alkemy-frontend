import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoserviceService } from 'src/app/servicios todos/todoservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  title = '';
  materias: any;

  constructor(private srvconsultar: TodoserviceService) { }

 

  ngOnInit() {
    /* this.buscarDatos(); */
  }

   // buscar por titulo de la materia
  /*  grupoFiltrar = new FormGroup({
    buscar: new FormControl(''),
  }); */

  /* buscarDatos(){
    this.srvconsultar.listaMateriasConfirmada().subscribe((response) => {
      this.materias= response;
      console.log(this.materias);
    },
    (error) => console.log(error)
    );
  } */


}
