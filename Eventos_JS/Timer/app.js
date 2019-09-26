//set interval = nos permite ejecutar funcioens de callback cada x tiempo
window.addEventListener("load", function(){
    
    function intervalo(){
        var tiempo = setInterval(function(){
            let ejem = document.querySelector(".ejemplo");
    
            if(document.querySelector(".ejemplo").style.fontSize == "18px"){
                ejem.style.fontSize = "14px";
            }else{
                ejem.style.fontSize = "18px";
            }
    
            let txt = document.createTextNode("Cada 3 segundo ejecuto funcion de set interval, ");
            ejem.appendChild(txt);
        }, 3000);
        return tiempo;
    }

    var tiempo = intervalo();

    //set time out
    var tiempo2 = setTimeout(function(){
        let ejem2 = document.querySelector(".ejemplo2");
        ejem2.style.color="red";
        let txt2 = document.createTextNode("En 5 segundo ejecuto funcion de set time out.");
        ejem2.appendChild(txt2);
    }, 5000);

    var detener = document.querySelector("#detener");
    detener.addEventListener("click", function(){
        clearInterval(tiempo); //detengo la ejecucion del set interval
    });

    var empezar = document.querySelector("#comenzar");
    empezar.addEventListener("click", function(){
        intervalo();//reitero la ejecucion del set interval
    });
});

