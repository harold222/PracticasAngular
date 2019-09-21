// Destructuracion de objetos y arreglos

let avenger = {
    nombre: "Steve",
    clave: "Cap America",
    poder: "Drogra"
};

// let nombre = avenger.nombre;
// let clave = avenger.clave;/* Tomo variables independientes del let */
// let poder = avenger.poder;

let {nombre,clave,poder} = avenger;/* Con typescript */
console.log(nombre,clave,poder);

//destrucutrara arreglos-----------------------------------------------------------
let avengers:string[] = ["Thor","Steve","Tony"];
let [a, ,c] = avengers; /* Simplemente apuntadores a las posiciones del arreglo */

console.log(a, c);
