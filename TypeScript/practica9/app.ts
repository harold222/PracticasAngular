class Avenger{/* clase */
    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;/* Por defecto estas variables */

    constructor(nombre:string, equipo:string, nombreReal:string) {
        this.nombre = nombre;
        this.equipo = equipo; /* Lo inicializo */
        this.nombreReal = nombreReal;
    }
}

let antman:Avenger = new Avenger("Antman","Capitan","Scott Lang"); /* Invoco la clase */
console.log(antman);
// --------------------------------------------------------------------------------------
function consola(constructor:Function){
    console.log(constructor);
}
 /* Decoradores: envia por parametro el constructor */
@consola    
class Villano{
    
    constructor(public nombre:string){

    }
}