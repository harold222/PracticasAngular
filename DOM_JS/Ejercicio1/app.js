/* Manipulacion de las etiquetas HTML */

function cambiarColor(color){
    caja.style.color = color;
}

//-----------------------------Conseguir elementos con un ID concreto-----------------------------

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

// cambiarColor(prompt("Ingrese el color de texto que desea ="));
cambiarColor("white");

console.log(caja);

//-----------------------------Conseguir elementos por sus etiquetas-----------------------------
var todosLosDivs = document.getElementsByTagName('div'); //todas las etiquetas con div
todosLosDivs[2].style.border = "2px solid black"; //accedo a ese por medio de un array

var valor = 0;
for (valor in todosLosDivs) { //si existe conteido string
    if(typeof todosLosDivs[valor].textContent == "string"){
        var parrafo = document.createElement("p");//creo un parrafo
        var texto = document.createTextNode(todosLosDivs[valor].textContent+".");
        parrafo.style.padding = "15px";
        parrafo.style.fontFamily = "monospace";
        
        parrafo.appendChild(texto);//introduzco dentro del parrafo
        document.querySelector("#miseccion").prepend(parrafo);//añdir antes
    }
}

//-----------------------------Conseguir elementos por su clase-----------------------------

// var divsOtrocolor = document.getElementsByClassName('otroColor');
var divsOtrocolor = document.querySelector(".otroColor");
divsOtrocolor.style.background="black";
divsOtrocolor.style.color = "white";

var divVerde = document.getElementsByClassName("verde");
var div;
for (div in divVerde) {
    if(divVerde[div].className == "verde"){
        divVerde[div].style.background="verde";
    }
    
}
//https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
