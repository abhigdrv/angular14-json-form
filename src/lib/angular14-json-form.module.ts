import { NgModule } from '@angular/core';
import { Angular14JsonFormComponent } from './angular14-json-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    Angular14JsonFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    Angular14JsonFormComponent
  ]
})
export class Angular14JsonFormModule { }
