import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CaruselModule} from "./main/carusel/carusel.module";





@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CaruselModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
