import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent{

  heroe:any = {};

  constructor(private actived:ActivatedRoute, private _heroes: HeroesService) { 
    this.actived.params.subscribe(params =>{//recibo el id de cada heroe
      this.heroe = this._heroes.getHeroe(params['id']); //cargo la variable del heroe
    });
  }
  
}
