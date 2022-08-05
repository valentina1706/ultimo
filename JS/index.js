console.log ("me lees?");
let edad= 17;
/*
variables (cambia) constantes (no cambia)
*/

//defino o declaro constantemente
const mensaje = document.getElementById("mensaje");

//selecciono el boton 
const boton = document.getElementById("boton");




//escuchar u veneto poaryticular
boton.addEventListener("click" ,mostrarFondo)
//crar la funcion mostrarFondo
function mostrarFondo( ) {
    console.log("click"); 
    mensaje.classList.add("bg-dark")
}

// Seleccionamos mensaje y le agregamos o cambiamos el contenido
mensaje.textContent = "Desde Javascript"

//eliminar clases
mensaje.classList.remove ("bg-dark");

//agregar una clase de css
//mensaje.classList.add("text-center", "bg-warning");


//funcion
function mostrarTexto(e) {
    console.log(e);
}

//invocacion de la funcion
mostrarTexto()