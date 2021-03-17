import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Api_alkemyService } from './services/api_alkemy.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Api_alkemyService
  ],
  declarations: [	FormularioComponent,
   ],
})
export class FormModule { }
