window.addEventListener("load", function(){
    var formulario = document.querySelector("#formulario");
    var divs = document.querySelector("#datos");
    divs.style.display = "none";


    formulario.addEventListener("submit", function(){
        var nombre = document.querySelector("#nombre").value;//valor que ppsee dentro
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;

        divs.style.display = "block";//muestro el formulario

        if(nombre.trim() == "null" || nombre.length == 0){//elimino los espacios
           divs.style.color = "red";
           divs.innerHTML = "Favor ingrese su nombre en el formulario";
           document.querySelector("#error").style.color = "red";
           document.querySelector("#error").innerHTML = "El nombre no es valido";
        }else if(apellido.trim() == "null" || apellido.length == 0){
            divs.style.color = "red";
            divs.innerHTML = "Favor ingrese su apellido en el formulario";
        }else if(isNaN(edad) || edad.length <= 0){
            divs.style.color = "red";
            divs.innerHTML = "Favor ingrese su edad correctamente";
        }else{
            var datos = [nombre,apellido,edad];
            divs.style.color = "green";
            divs.innerHTML = "";//elimino los posibles errores
            var indice;

            document.querySelector("#error").innerHTML = "";

            var h4 = document.createElement("h4");
            h4.append("La informacion es:");
            divs.append(h4);

            for(indice in datos){
                var parrafo = document.createElement("p");//etiqueta p
                parrafo.append(datos[indice]);
                divs.append(parrafo);
            }
        }
    });

    var boton2 = document.querySelector("#mostrar");
    boton2.addEventListener("click", function(){
        if(divs.style.display == "none"){
            divs.style.display = "block";
            boton2.style.background = "green";
            boton2.style.color = "white";
            boton2.innerHTML = "Ocultar datos";
        }else{
            boton2.style.background = "buttonface";
            boton2.style.color = "black";
            divs.style.display = "none";
            boton2.innerHTML = "Ver datos del formulario";
        }
    });
});
