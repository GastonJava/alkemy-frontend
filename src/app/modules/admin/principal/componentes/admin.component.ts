import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/formulario/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {

  }

  salir(){
    this.auth.logOut();
    this.route.navigate(["/principalform"]);
  }
  

}
