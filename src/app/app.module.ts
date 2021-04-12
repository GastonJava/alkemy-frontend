import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './shared/loader/loader.component';

import { NavbarComponent } from './core/paginas/navbar/navbar.component';
import { SidebarComponent } from './core/paginas/footer/sidebar/sidebar.component';
import { AdminfooterComponent } from './core/paginas/footer/adminfooter/adminfooter.component';
import { FooterComponent } from './core/paginas/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from './core/paginas/navbar/navbar.module';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
  
    FooterComponent,
    AdminfooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
