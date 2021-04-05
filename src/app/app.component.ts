import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UrlbooleanService } from './shared/services/urlboolean.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alkemi-university-app';

  private count = 0;
  private spinner$ = new BehaviorSubject<string>('');

  constructor(private route: Router, private srvboolean: UrlbooleanService){}


  ngOnInit(){
 /*    this.evento(); */
  
  }


 
  /* evento(){
      
    this.route.events.subscribe((evento: Event) => {
      if (evento instanceof NavigationStart) {
    

        if(evento.url == "/consultaralumno"){


          this.srvboolean.setBoolean(true);
        }

        if(evento.url == "/registraralumno"){

        }


        console.log(evento.url);
      }

      if (evento instanceof NavigationEnd) {
  
        this.spinner$.next('stop');
        console.log(evento.url);
      }

      if (evento instanceof NavigationError) {


 
        console.log(evento.error);
      }
    })
  

  } */
  
}