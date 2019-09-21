// Ejemplos de funciones flecha
var miFunciona = function (a) {
    return a;
};
var miFuncionb = function (a) { return a; }; /* Recibe como parametro a y retorna a igual al de arriba*/
// -------------------------------------------------------------------------------------------------
var segundo1 = function (a, b) {
    return a + b;
};
var segundo2 = function (a, b) { return a + b; };
// -------------------------------------------------------------------------------------------------
var tercero1 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var tercero2 = function (nombre) { return nombre.toUpperCase(); };
// -------------------------------------------------------------------------------------------------
var nombre = "alfredo"; /* Puede llegar a tomar este valor */
var hulk = {
    nombre: "Bruce",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
console.log(miFuncionb("harold"));
console.log(segundo2(1, 5));
console.log(tercero2("harold"));
hulk.smash();
