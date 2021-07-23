import {CategoryItems, GroupItems, Item} from "../header-component/header-line-nav/header-nav-component/header-nav-menu/header-menu-component/header-menu";


export class DataService {
  private _dataMenu:Array<GroupItems>;

  constructor() {
    this._dataMenu = this.testDataMenu();
  }

  get dataMenu(): Array<GroupItems> {
    return this._dataMenu;
  }

  testDataMenu(): Array<GroupItems> {
    const menu = [];
    for (let i = 0; i < 5; i++) {
      const listCategory = [];
      for (let j = 0; j < 5; j++) {
        const listItems = [];
        for (let g = 0; g < 5; g++) {
          listItems.push(new Item(`Item_${i}${j}${g}`, '#'));
        }
        listCategory.push(new CategoryItems(listItems, `category_${i}${j}`, '#'))
      }
      menu.push(new GroupItems(`Menu_${i}`, '#', listCategory));
    }
    return menu;
  }
}
