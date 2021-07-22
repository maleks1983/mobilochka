import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appNavMenuHover]'
})
export class NavMenuHoverDirective {
  @HostListener('mouseover') changeDisplay() {
    const form:HTMLElement | null = document.querySelector('main');
    form?.classList.add('main-opacity');
  }

  @HostListener('mouseout') changeDisplayRemove() {
    const form:HTMLElement | null = document.querySelector('main');
    form?.classList.remove('main-opacity');

  }
  constructor() {

  }

}
