import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header-component/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {HeaderLineAboutComponent} from "./header-component/header-line-about/header-line-about.component";
import {HeaderLineLogoComponent} from "./header-component/header-line-logo/header-line-logo.component";
import {HeaderLineNavComponent} from "./header-component/header-line-nav/header-nav-component/header-line-nav.component";
import {HeadrrMenuModule} from "./header-component/header-line-nav/header-nav-component/header-nav-menu/headrr-menu.module";





@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLineAboutComponent,
    HeaderLineLogoComponent,
    HeaderLineNavComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HeadrrMenuModule
  ],
  bootstrap: [HeaderComponent]
})
export class HeaderModule {

}
