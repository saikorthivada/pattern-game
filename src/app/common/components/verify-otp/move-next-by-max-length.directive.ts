import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMoveNextByMaxLength]'
})
export class MoveNextByMaxLengthDirective {

  constructor() { }

  @HostListener('keyup', ['$event']) onkeyup(ev: KeyboardEvent) {
    ev.preventDefault();
    if (ev.keyCode === 8) {
      let previousControl: any = ev.srcElement.previousElementSibling;
      while (true) {
        if (previousControl) {
          if (previousControl.type === ev.srcElement['type']) {
            previousControl.focus();
            return;
          } else {
            previousControl = previousControl.nextElementSibling;
          }
        } else {
          return;
        }
      }
    } else {
      let nextControl: any = ev.srcElement.nextElementSibling;
      while (true) {
        if (nextControl) {
          if (nextControl.type === ev.srcElement['type']) {
            nextControl.focus();
            return;
          } else {
            nextControl = nextControl.nextElementSibling;
          }
        } else {
          return;
        }
      }
    }
  }

}
