import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, Ng2SearchPipeModule

  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }