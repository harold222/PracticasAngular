//BOM
//cambiar url, alertas, confirmaciones, prompt, abrir ventana, mover ventana etc

function getTamaño(){
    console.log(window.innerWidth);//anchura
    console.log(window.innerHeight);//ver el tamaño de la ventana, altura
}

function getScreen(){
    console.log(screen.width);
    console.log(screen.height);
}

function getUrl(){
    console.log(window.location);
}

function redirigir(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width=400","heigth=400"); //ventana nueva
}

function getTitulo(){
    console.log(document.title);
    window.document.title = "Cambio de titulo";
}

function Imprimir(){
    window.print();
}

getTamaño();
getScreen();
getUrl();
getTitulo();
//Imprimir();



//redirigir(prompt("Que pagina desea ser redirigido?"));
//abrirVentana(prompt("Que pagina desea ser redirigido?"));