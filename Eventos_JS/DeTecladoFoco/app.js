window.addEventListener('load', () => {//cuando ya se cargue todos los elementos
    
    var input = document.querySelector("#campo_nombre");

    //focus = dentro del input solo el hacer click
    input.addEventListener("focus", function(){
        document.querySelector("#h1").innerHTML = "Ingresa tu nombre";
    });
    
    //blur = cuando se sale del foco
    input.addEventListener("blur", function(){
        document.querySelector("#h1").innerHTML = "";
    });
    
    //keydown = sucede cuando se pulsa una tecla
    input.addEventListener("keydown", function(event){
        var añadir = document.createTextNode("- haz pulsado la tecla "+String.fromCharCode(event.keyCode));
        document.querySelector("#h1").appendChild(añadir);
    });
    
    //keypress = cuando ya la he pulsado
    input.addEventListener("keypress", function(event){
        console.log("Tecla presionada", String.fromCharCode(event.keyCode));
    });
    
    //keyup = captura el evento cuando dejod e pulsar la tecla
    input.addEventListener("keyup", function(event){
        console.log("Ya dejaste de presionar la ", String.fromCharCode(event.keyCode));
    });
});



