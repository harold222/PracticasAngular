//metodos de busquedas dentro de una cadena de txt

var txt1= "hola soy harold";
var txt2= "hola soy harold soy";

var busqueda = txt1.indexOf("soy"); //me devuelve en que posicion esta esta palabra
var busqueda2 = txt1.lastIndexOf("harold");
var busqueda3 = txt1.search("hola");
var busqueda4 = txt1.match("soy"); //devuelve un array con las palabras, util
var busqueda5 = txt2.match("/soy/gi"); //Lo mismo que el anterior pero me buscara amas concidencias de esa palabra
var busqueda6 = txt1.substr(2,5);//sacara las palabras entre esas posiciones
var busqueda7 = txt1.charAt(2);//tomara slo un caracter definido por una posicion
var busqueda8 = txt1.startsWith("hol");//devulve true o false dependiendo si lo encuentra pero solo sirve desde el principio del txt
var busqueda9 = txt1.includes("harold");//true si existe en todo ese string la palabra sino false

console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);
console.log(busqueda9);

//mas funciones
busqueda = txt1.replace("harold","pedraza");//para reemplazar texto, i se encuentra la palabra
console.log(busqueda);
busqueda = txt1.slice(3,5);//cortara el string hasta el 3
console.log(busqueda);
busqueda = txt1.split(" ");//separa el string por los espacios conviertiendolo en array de palabras
console.log(busqueda);
busqueda= txt1.trim();//quitara los espacios al principio y fin del string, super util en una base de datos no guardar espacios
console.log(busqueda);

