// Diferencia entra var, let y const

var mensaje="hola";

if(true){
    var mensaje = "adios";
}

console.log(mensaje);//muestra adios

let mensaje2="hola";

if(true){
    let mensaje2 = "adios";
}

console.log(mensaje2);//muestra hola

const opciones="todas";

// opciones="12"; //no se puede cambiar su valor

console.log(opciones);

let nombre:string = "peter";

nombre = 123;

let cualquiera:any;

cualquiera="harold";
cualquiera=123;

let spiderman = {
    nombre: "peter",
    edad:20
}

