// Ejemplos de funciones flecha

let miFunciona = function(a){
    return a;
};
let miFuncionb = (a) => a; /* Recibe como parametro a y retorna a igual al de arriba*/
// -------------------------------------------------------------------------------------------------

let segundo1 = function(a,b){
    return a + b;
};
let segundo2 = (a,b) => a+b;
// -------------------------------------------------------------------------------------------------

let tercero1 = function(nombre){
    nombre = nombre.toUpperCase();
    return nombre;
};
let tercero2 = (nombre) => nombre.toUpperCase();
// -------------------------------------------------------------------------------------------------
let nombre="alfredo";/* Puede llegar a tomar este valor */

let hulk ={
    nombre: "Bruce",
    smash(){/* defino funciones asi */
        setTimeout(()=> console.log(this.nombre+" smash!!"), 1500);
    }
}

console.log(miFuncionb("harold"));
console.log(segundo2(1,5));
console.log(tercero2("harold"));
hulk.smash();