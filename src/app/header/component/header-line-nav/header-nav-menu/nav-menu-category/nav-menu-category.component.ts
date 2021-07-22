import {Component, Input, OnInit} from '@angular/core';
import {CategoryItems, Item} from "../header-menu";

@Component({
  selector: 'app-nav-menu-category',
  templateUrl: './nav-menu-category.component.html',
  styleUrls: ['./nav-menu-category.component.css']
})
export class NavMenuCategoryComponent implements OnInit {
  @Input() public categorys: Array<CategoryItems> =new Array<CategoryItems>();
  constructor() { }

  ngOnInit(): void {
  }

}
