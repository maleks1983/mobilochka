import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponentComponent } from './cart-component/cart-component.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    CartComponentComponent
  ],
  exports: [
    CartComponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap:[CartComponentComponent]

})
export class CartModule { }
