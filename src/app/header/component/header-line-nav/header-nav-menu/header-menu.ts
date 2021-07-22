export class GroupItems {
  listComponent: Array<CategoryItems>;
  name: string;
  link: string;
  image: string ='';

  constructor( name: string, link: string ,listComponent: Array<CategoryItems>) {
    this.listComponent = listComponent;
    this.name = name;
    this.link = link;
  }

}


export class CategoryItems {
  listItems: Array<Item>;
  name: string;
  link: string;

  constructor(listItems: Array<Item>, name: string, link: string) {
    this.listItems = listItems;
    this.name = name;
    this.link = link;
  }
}


export class Item {
  name: string;
  link: string;

  constructor(name: string, link: string) {
    this.name = name;
    this.link = link;
  }

}


