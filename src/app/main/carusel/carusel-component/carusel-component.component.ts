import {Component, OnInit} from '@angular/core';

class Carusel {
  src: string = '';
  alt: string = '';
  href: string = '#';

  constructor(src: string, alt: string, href: string) {
    this.src = src;
    this.alt = alt;
    this.href = href;
  }
}

@Component({
  selector: 'app-carusel-component',
  templateUrl: './carusel-component.component.html',
  styleUrls: ['./carusel-component.component.css']
})
export class CaruselComponentComponent implements OnInit {
  images: Array<Carusel> = new Array<Carusel>();

  constructor() {
  }

  ngOnInit(): void {
    this.images = new Array<Carusel>(
      new Carusel('https://i.allo.ua/media/homepage/topbanner/AVD5_300x460.png','',''),
      new Carusel('https://i.allo.ua/media/homepage/topbanner/Resizes_Wnew_300x460.png','',''),
      new Carusel('https://i.allo.ua/media/homepage/topbanner/Resizes_Wnew_300x460.png','',''),
      new Carusel('https://i.allo.ua/media/homepage/topbanner/Poco_X3_Pro__Wnew_300x4601100.png','','')
    )
  }

}
