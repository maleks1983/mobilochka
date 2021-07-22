import {Component, OnInit} from '@angular/core';
import { GroupItems} from "./header-menu";
import {DataService} from "../../../data/data-service";


@Component({
  selector: 'app-header-nav-menu',
  templateUrl: './header-nav-menu.component.html',
  styleUrls: ['./header-nav-menu.component.css'],
  providers: [DataService]
})
export class HeaderNavMenuComponent implements OnInit {
  items: Array<GroupItems> = [];


  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.items = this.dataService.testDataMenu();
  }


}

