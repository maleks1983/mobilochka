import {Component, Input, OnInit} from '@angular/core';
import {GroupItems, Item} from "../header-menu";

@Component({
  selector: 'app-nav-menu-groups',
  templateUrl: './nav-menu-groups.component.html',
  styleUrls: ['./nav-menu-groups.component.css']
})
export class NavMenuGroupsComponent implements OnInit {
  src: string = "assets/Phones.png";
  @Input() public groups: Array<GroupItems> = new Array<GroupItems>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
