import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts-component/contacts.component';
import { FormFindComponent } from '../form-find/form-find.component';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    ContactsComponent,
    FormFindComponent
  ],
  exports: [
    ContactsComponent,
    FormFindComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  bootstrap:[ContactsComponent]
})
export class ContactsModule { }
