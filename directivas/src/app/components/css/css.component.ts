import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  estilo: string = "alert-danger";
  cargando: boolean = false;

  propiedad: Object = {
    danger: false
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.cargando = true;
    setTimeout(() => this.cargando = false, 2000);
  }

}
