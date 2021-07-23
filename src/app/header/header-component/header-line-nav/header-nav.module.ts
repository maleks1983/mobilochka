import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderLineNavComponent} from "./header-nav-component/header-line-nav.component";
import {HeadrrMenuModule} from "./header-nav-component/header-nav-menu/headrr-menu.module";

import {ContactsModule} from "./header-nav-component/header-nav-list/contacts/contacts.module";



@NgModule({
  declarations: [HeaderLineNavComponent],
  imports: [
    CommonModule,
    HeadrrMenuModule,
    ContactsModule


  ],
  bootstrap:[HeaderLineNavComponent]
})
export class HeaderNavModule { }
