function getNombre(){
    return "Harold";
}

let nombre:string = "juan";
let apellido:string = "perez";
let edad:number = 32;

// Puedo hacer este proceso mas facil con typescript string de multiples variables

// let texto = "hola "+nombre + " "+ apellido+ " " + edad;
let texto = `Hola, ${nombre} ${apellido} 
                con edad de ${edad}`;

let texto2 = `${1+2}`;/* Lo que esta dentro de los corchetes son funciones de js*/
let texto3 = `${getNombre()}`;

console.log(texto);
console.log(texto2);
console.log(texto3);