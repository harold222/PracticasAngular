// Parametros opcionales, obligatorios y por defecto
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "pc"; }
    var mensaje;
    if (momento) /* Si existe algo en momento */
        mensaje = quien + " activo el " + objeto + " en el momento " + momento;
    else
        mensaje = quien + " activo el " + objeto;
    console.log(mensaje);
}
activar("Harold", "pc", "de ahora");
// Restriciones el primer parameto no puede ser opcional
// para llamar esa funcion se debe cumplir el orden de los parametros sin importar su tipo
// quien:string = es obligatorio
// momento?:string = el ? significa que ese parametro puede ser opcional
// objeto:string = es por defecto se define en la propia funcion su valor
