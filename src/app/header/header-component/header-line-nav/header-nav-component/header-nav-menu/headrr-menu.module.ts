import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavMenuGroupsComponent} from "./header-menu-component/nav-menu-groups/nav-menu-groups.component";
import {NavMenuCategoryComponent} from "./header-menu-component/nav-menu-category/nav-menu-category.component";
import {NavMenuItemsComponent} from "./header-menu-component/nav-menu-items/nav-menu-items.component";
import {NavMenuHoverDirective} from "./header-menu-derective/nav-menu-hover.directive";
import {HeaderNavMenuComponent} from "./header-menu-component/header-nav-menu.component";
import {BrowserModule} from "@angular/platform-browser";
import {HeaderNavListComponent} from "../header-nav-list/header-nav-list.component";
import {ContactsModule} from "../header-nav-list/contacts/contacts.module";
import {SiginModule} from "../header-nav-list/sigin/sigin.module";
import {CartModule} from "../header-nav-list/cart/cart.module";


@NgModule({
  declarations: [
    HeaderNavMenuComponent,
    NavMenuGroupsComponent,
    NavMenuCategoryComponent,
    NavMenuItemsComponent,
    NavMenuHoverDirective,
    NavMenuHoverDirective,
    HeaderNavListComponent
  ],
  imports: [
    CommonModule, BrowserModule, ContactsModule, SiginModule, CartModule
  ],
  exports: [
    HeaderNavMenuComponent,
    HeaderNavListComponent
  ],
  bootstrap: [HeaderNavMenuComponent]
})
export class HeadrrMenuModule {
}
