import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {

  constructor() { }

  @HostBinding('style.background-color') bgcolor: string 

  colors = [
    'AliceBlue','Lavender','LightGreen', 'LightGrey','White','Aqua'
  ]

  i = 0;
  @HostListener('click') changeColor() {
    this.bgcolor = this.colors[this.i]
    this.i = ++this.i % this.colors.length
  }

}
