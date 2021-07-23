import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './sigin-componenr/sigin.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    SiginComponent
  ],
  exports: [
    SiginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap:[SiginComponent]
})
export class SiginModule { }
