import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{

    mostrar = true;

    frase: any ={
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        author: 'Ben parker'
    }

    personajes: string[] = ['spiderman', 'Venom', 'Octopus'];
}