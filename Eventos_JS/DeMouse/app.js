//---------------------------------Eventos de mouse-----------------------------------
var boton = document.querySelector("#boton");
var div = document.querySelector("#micaja");

function cambiarColor(){
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
        boton.style.color = "white";
    }else{
        boton.style.background = "green";
        boton.style.padding = "10px";
        boton.style.border = "1px solid black";
    }
    return true;
}

function doble(){
    boton.style.fontSize = "18px";
}

function sinHover(){
    boton.style.fontSize = "14px";
}

function mantenerPresionado(){
    boton.innerHTML = "Sueltame";
}

function SoltarPresionado(){
    boton.innerHTML = "Presioname";
}

function MoverMouse(event){
    var x = event.clientX;
    var y = event.clientY;
    var coor = "Coordenadas: (" + x + "," + y + ")";
    div.innerHTML = coor;
}

boton.addEventListener('click', function(){//capturo cualquiere evento de ese elemento
    cambiarColor(); //solo acepta funciones asi o callback o flecha
});

boton.addEventListener('mouseover', function(){//encima del boton
    doble();
});

boton.addEventListener('mouseout', function(){//fuera del boton sin hover
    sinHover();
});

boton.addEventListener('mousedown', function(){//cuando se mantenga el click
    mantenerPresionado();
});

boton.addEventListener('mouseup', function(){//cuando suelte el click
    SoltarPresionado();
});

div.addEventListener('mousemove', function(){
    MoverMouse(event);
});