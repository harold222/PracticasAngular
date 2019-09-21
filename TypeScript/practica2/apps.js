"use strict";
// Diferencia entra var, let y const
var mensaje = "hola";
if (true) {
    var mensaje = "adios";
}
console.log(mensaje); //muestra adios
var mensaje2 = "hola";
if (true) {
    var mensaje2_1 = "adios";
}
console.log(mensaje2); //muestra hola
var opciones = "todas";
// opciones="12"; //no se puede cambiar su valor
console.log(opciones);
var nombre = "peter";
nombre = 123;
var cualquiera;
cualquiera = "harold";
cualquiera = 123;
var spiderman = {
    nombre: "peter",
    edad: 20
};
