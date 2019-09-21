function saludar( nombre:string ) {/* El nombre debe definirse el tipo para no mostrar object */
    console.log("hola " + nombre.toUpperCase());
}

var wolverine = {
    nombre: 'Harold'
};

saludar(wolverine.nombre);