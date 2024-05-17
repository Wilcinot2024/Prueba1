function enviarDatosDeContacto(){
    let nombre, apellido, email, telefono, mensaje , expresion;
     nombre = document.getElementById("nombre").value;
     apellido = document.getElementById("apellido").value;
     email = document.getElementById("email").value;
     telefono = document.getElementById("telefono").value;
     mensaje = document.getElementById("mensaje").value;
     
     expresion = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(telefono);
    console.log(mensaje);

    if(nombre === "" || apellido === "" || email === "" || telefono === "" 
    || mensaje === "" ){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.lenght>30){
        alert("El nombre es muy largo");  
        return false;
    }
    else if(apellido.lenght>80){
        alert("Los apellidos son muy largo");
        return false;
    }
    else if(email.lenght>100){
        alert("El correo es muy largo");
        return false;
    }
     
    else if(!expresion.test(email)){
        alert("El correo no es valido");
        return false;
    }


    else if(telefono.lenght>10){
        alert("El telefono es muy largo");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El telefono ingresado no es un número");
        return false;
    }
    
    

   
}