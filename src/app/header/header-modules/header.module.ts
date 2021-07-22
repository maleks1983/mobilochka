import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../header.component";
import {BrowserModule} from "@angular/platform-browser";
import {HeaderLineAboutComponent} from "../component/header-line-about/header-line-about.component";
import {HeaderLineLogoComponent} from "../component/header-line-logo/header-line-logo.component";
import {HeaderLineNavComponent} from "../component/header-line-nav/header-line-nav.component";
import {HeaderNavMenuComponent} from "../component/header-line-nav/header-nav-menu/header-nav-menu.component";
import {NavMenuGroupsComponent} from "../component/header-line-nav/header-nav-menu/nav-menu-groups/nav-menu-groups.component";
import {NavMenuCategoryComponent} from "../component/header-line-nav/header-nav-menu/nav-menu-category/nav-menu-category.component";
import {NavMenuItemsComponent} from "../component/header-line-nav/header-nav-menu/nav-menu-items/nav-menu-items.component";
import {NavMenuHoverDirective} from "../component/header-line-nav/header-nav-menu/derective/nav-menu-hover.directive";


@NgModule({
  declarations: [
    HeaderComponent,
    NavMenuGroupsComponent,
    NavMenuCategoryComponent,
    NavMenuItemsComponent,
    NavMenuHoverDirective,
    HeaderLineAboutComponent,
    HeaderLineLogoComponent,
    HeaderLineNavComponent,
    HeaderNavMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [HeaderComponent]
})
export class HeaderModule {
}
