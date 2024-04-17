let mini = 1;
let maxi = 10;
let numeroRandom = 0;

function reiniciarJuego(){
    location.reload();
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}
function mostrarBotones(){
    let botonComenzar = document.getElementById("boton-comenzar");
    let botonSi = document.getElementById("boton-si");
    let botonMayor = document.getElementById("boton-mayor");
    let botonMenor = document.getElementById("boton-menor");
    let mensaje = document.getElementById("subtitulo");

    botonComenzar.hidden=true;
    botonSi.removeAttribute("hidden");
    botonMayor.removeAttribute("hidden");
    botonMenor.removeAttribute("hidden");
    mensaje.innerHTML = "A caso será este..."
}
function comenzar(){
    let bolaCristal = document.getElementById("bola-Cristal");
    bolaCristal.setAttribute("hidden", true);
    
    let numeroAdivinado = document.getElementById("numeroadivinado");
    numeroRandom = aleatorio(mini,maxi)
    numeroAdivinado.innerHTML =  numeroRandom ;
       
    mostrarBotones();
}
function numeroMenor(){
    console.log("1. Max = " + maxi +" / "+ "min = " + mini +" / "+ "NumRandom = " +numeroRandom)
    let numeroAdivinado = document.getElementById("numeroadivinado");
    if(numeroRandom>mini){
        maxi = numeroRandom-1;
        numeroRandom = aleatorio(mini,maxi);
    }else{
        alert("Esas son puras mentiras😠😒")
    }
        
    numeroAdivinado.innerHTML =  numeroRandom ;
    console.log("2. Max = " + maxi +" / "+ "min = " + mini +" / "+ "NumRandom = " +numeroRandom)
}
function numeroMayor(){
    console.log("1. Max = " + maxi +" / "+ "min = " + mini +" / "+ "NumRandom = " +numeroRandom)
    let numeroAdivinado = document.getElementById("numeroadivinado");
    if(numeroRandom<maxi){
        mini = numeroRandom+1;
        numeroRandom = aleatorio(mini,maxi);
    }else {
        alert("Esas son puras mentiras😠😒")
    }
    
    numeroAdivinado.innerHTML =  numeroRandom ;
    console.log("2. Max = " + maxi +" / "+ "min = " + mini +" / "+ "NumRandom = " +numeroRandom)
}
function acertado(){
    let mensaje = document.getElementById("subtitulo");
    mensaje.innerHTML="Lo logré!👑 Adivine el número";

    let botonSi = document.getElementById("boton-si");
    botonSi.hidden=true;
    let botonMayor = document.getElementById("boton-mayor");
    botonMayor.hidden=true;
    let botonMenor = document.getElementById("boton-menor");
    botonMenor.hidden=true;
    let botonReiniciar = document.getElementById("reiniciar");
    botonReiniciar.removeAttribute("hidden");
    let ganador = document.getElementById("ganador");
    ganador.removeAttribute("hidden");
    let numSecreto = document.getElementById("numeroadivinado");
    numSecreto.hidden=true;    
    }