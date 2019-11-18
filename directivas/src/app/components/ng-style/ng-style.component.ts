import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Ejemplo de ng style
    </p>

  <button class="btn btn-primary" *ngIf="tamano < 100" (click)="tamano = tamano + 5">
    <i class="fa fa-plus"></i>
  </button>

  <button class="btn btn-primary" *ngIf="tamano > 10" (click)="tamano = tamano - 5">
    <i class="fa fa-minus"></i>
  </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano: number = 50;

  constructor() { }

  ngOnInit() {
  }


}
