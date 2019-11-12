import { Component, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements DoCheck, OnDestroy{

  public titulo:string;
  public listado:string;

  constructor() {
    this.titulo = "Componente videojuego";
    this.listado = "Listado de juegos";
  }

  ngDoCheck(): void {
    console.log("Docheck ejecutado");
  }

  ngOnDestroy(){
    console.log("OnDestroy ejecutado");
  }

  cambiarTitulo(){
    this.titulo = "Nuevo titulo";
  }




}
