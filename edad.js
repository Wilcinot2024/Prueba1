
function validarEdad(){
    Edad = document.getElementById("Edad").value;

    console.log(mensaje);

    if(persona.edad <= 18){
        alert("No puedes terminar la compra siendo menor de edad");
        return false;

    }
}

