console.log ("desde js");

//selecciono elementos vinculados al html para procesar
const boton = document.getElementById("boton");



const milimetros = document.getElementById("milimetros")

const centimetros = document.getElementById("centimetros")

const decimetros = document.getElementById("decimetros")

const decametros = document.getElementById("decametros")

const hectometros = document.getElementById("hectometros")

const kilometros = document.getElementById("kilometros")

//evento click

boton.addEventListener("click",metros);

//crear funcion

function metros() {

    let metros = document.getElementById("metros").value;
    metros = parseInt(metros);


    //instrucciones
    
   milimetros.textContent=metros*1000

   centimetros.textContent=metros*100

   decimetros.textContent=metros*10

   decametros.textContent=metros/10

   hectometros.textContent=metros/100

   kilometros.textContent=metros/1000
   
}