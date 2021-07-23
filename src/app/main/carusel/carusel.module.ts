import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaruselComponentComponent } from './carusel-component/carusel-component.component';



@NgModule({
  declarations: [
    CaruselComponentComponent
  ],
  exports: [
    CaruselComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CaruselModule { }
