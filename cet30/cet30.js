const cuerpo =document.getElementById("cuerpo")
console.log(cuerpo)


//seleciono botones
const boton1 =document.getElementById("boton-1");
const boton2 =document.getElementById("boton-2");
const boton3 =document.getElementById("boton-3");

//llamo evento
boton1.addEventListener("click", mostrarFondo1);



    function mostrarFondo1() {
        console.log("click");
       
        cuerpo.classList.remove("bg-secondary");
        cuerpo.classList.remove("bg-warning");
        
        cuerpo.classList.add("bg-black", "text-light");
        cuerpo.classList.add("text-light")

    }




boton2.addEventListener("click",mostrarFondo2);



    function mostrarFondo2() {
        console.log("click");
     
        cuerpo.classList.remove("bg-secondary");
        cuerpo.classList.remove("bg-warning");
        cuerpo.classList.remove("bg-black");
        cuerpo.classList.remove("text-light", "text-danger")
        cuerpo.classList.add("bg-secondary","text-warning");
        
    }



    boton3.addEventListener("click",mostrarFondo3);



    function mostrarFondo3() {
        console.log("click");
        
        cuerpo.classList.remove("bg-secondary");
        cuerpo.classList.remove("bg-primary");
        cuerpo.classList.remove("bg-black");
        cuerpo.classList.remove("text-light", "text,warning")
        cuerpo.classList.add("bg-warning", "text-danger");
        
    }