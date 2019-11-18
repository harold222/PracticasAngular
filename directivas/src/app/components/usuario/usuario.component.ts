import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
    this.router.params.subscribe( parametros => {/* Obtengo los parametros por url */
      console.log("Ruta padre: ", parametros);
    });
  }

  ngOnInit() {
  }

}
