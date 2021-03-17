import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminfooter',
  templateUrl: './adminfooter.component.html',
  styleUrls: ['./adminfooter.component.scss']
})
export class AdminfooterComponent implements OnInit {

  btnToggle: boolean;

  constructor() { }

 

  ngOnInit() {
   this.btnToggle = false;
  }

  abrirmenu(){
   /*  document.getElementById("nav").style.display = "none";
    document.getElementById("title").style.display = "none"; */
    document.getElementById("hide").style.visibility = "hidden";

    document.getElementById("nav").style.width = "98%"; 
    document.getElementById("nav").style.marginLeft = "2px";
    document.getElementById("nav").style.visibility = "visible";

    setTimeout(() => {
      document.getElementById("hide").style.visibility = "visible";
    }, 2000);

    this.btnToggle = false;
    /* document.getElementById("hide").style.backgroundColor = "green";
    document.getElementById("hide").style.display = "block"; */
    
  }

  cerrarmenu(){
    document.getElementById("nav").style.visibility = "hidden";
    document.getElementById("nav").style.width = "0";
    document.getElementById("nav").style.marginLeft = "80px"; 
    this.btnToggle = true; 
    /* document.getElementById("hide").style.backgroundColor = "green";
    document.getElementById("hide").style.display = "none"; */
  }

}
