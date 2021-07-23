import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../header-menu";


@Component({
  selector: 'app-nav-menu-items',
  templateUrl: './nav-menu-items.component.html',
  styleUrls: ['./nav-menu-items.component.css'],
})

export class NavMenuItemsComponent implements OnInit {
  @Input() public items: Array<Item> =new Array<Item>();


  constructor() {

  }

  ngOnInit() {

  }
}
