// Promesas en ecmascript 6
var prom1 = new Promise(function (resolver, rechazar) {
    setTimeout(function () {
        console.log("Promesa terminada");
        /* si termina bien */
        //resolver();
        // Si termina mal
        rechazar();
    }, 1500);
});
console.log("Paso 1"); /* Primero se ejecutan los otros console */
prom1.then(function () {
    console.log("Ejecutar");
}, function () {
    console.log("No lo ejecuto");
});
console.log("paso 2");
