/* Manipulacion de las etiquetas HTML */

function cambiarColor(color){
    caja.style.color = color;
}

//dos formas de seleccionar un mismo elemento
var caja = document.getElementById('micaja');
var caja2 = document.querySelector("#micaja"); //igual que en css con el seleccionador
// let caja = document.getElementById('micaja').innerHTML;//capturo el html dentro de ese div, el txt

console.log(caja);

caja.innerHTML = "Se ha cambiado su valor";//cambio su valor
caja.style.background = "red";
caja.style.padding = "10px";
caja.style.color = "white";
caja.className = "hola"; //añado clases

cambiarColor(prompt("Ingrese el color de texto que desea ="));

console.log(caja);

