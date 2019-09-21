// Destructuracion de objetos y arreglos
var avenger = {
    nombre: "Steve",
    clave: "Cap America",
    poder: "Drogra"
};
// let nombre = avenger.nombre;
// let clave = avenger.clave;/* Tomo variables independientes del let */
// let poder = avenger.poder;
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder; /* Con typescript */
console.log(nombre, clave, poder);
//destrucutrara arreglos-----------------------------------------------------------
var avengers = ["Thor", "Steve", "Tony"];
var a = avengers[0], c = avengers[2]; /* Simplemente apuntadores a las posiciones del arreglo */
console.log(a, c);
