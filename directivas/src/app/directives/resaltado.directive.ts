import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") color: string;

  constructor( private html: ElementRef ) {

  }

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.color || 'yellow');
  }

  @HostListener('mouseleave') mouseSale() {
    this.resaltar( null );
  }

  private resaltar( color:string ) {
    this.html.nativeElement.style.backgroundColor = color;
  }

}
