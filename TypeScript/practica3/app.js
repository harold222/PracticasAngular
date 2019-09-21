"use strict";
function getNombre() {
    return "Harold";
}
var nombre = "juan";
var apellido = "perez";
var edad = 32;
// Puedo hacer este proceso mas facil con typescript string de multiples variables
// let texto = "hola "+nombre + " "+ apellido+ " " + edad;
var texto = "Hola, " + nombre + " " + apellido + " \n                con edad de " + edad;
var texto2 = "" + (1 + 2); /* Lo que esta dentro de los corchetes son funciones de js*/
var texto3 = "" + getNombre();
console.log(texto);
console.log(texto2);
console.log(texto3);
