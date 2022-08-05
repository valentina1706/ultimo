console.log ("desde js");

//selecciono elementos vinculados al html para procesar
const btnSuma = document.getElementById("btn-sumar");

const resultado = document.getElementById("resultado");


let resultadoSuma;

//evento click

btnSuma.addEventListener("click",suma);

//crear funcion

function suma() {

    let num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);
    let num2 = document.getElementById("num2").value;
    num2 = parseInt(num2);
    //instrucciones
    console.log(num1,num2);
    resultadoSuma = num1 + num2;
    resultado.classList.add("bg-success");
    resultado.classList.add("text-light")
    resultado.textContent = `El resultado es  ${resultadoSuma} `;
}
