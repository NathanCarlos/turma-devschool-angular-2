import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class AppRedDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = "red";
  }

}
