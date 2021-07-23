import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer-component/footer.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap:[FooterComponent]

})
export class FooterModule { }
