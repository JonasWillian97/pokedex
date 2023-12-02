import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CardComponent
  ]
})
export class ComponentsModule { }
