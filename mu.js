let prueba = prompt("1, contraseña inv. 2, NT inv.")
let intentos = 3
function ingresar(){
    if(prueba == 1){
        const user = document.getElementById("user").value;
        const clave = document.getElementById("clave").value;
        const message = document.getElementById("message");

    if (intentos > 0) {
        if (clave === "1234") {
            message.style.color = "green";
            message.textContent = "Registro exitoso";
        } else {
            intentos--;
            message.style.color = "red";

            if (intentos > 0) {
            message.textContent = "Contraseña incorrecta. Intenta de nuevo";}
            else {
                message.textContent = "Has agotado tus intentos. Su cuenta se bloqueó por seguridad.";
            }
        }

    }
    }
     else{
        const user = document.getElementById("user").value;
        const clave = document.getElementById("clave").value;
        const message = document.getElementById("message");
        message.style.color = "red";
        message.textContent = "Este dispositivo no está registrado, por favor contacte con nuestros asesores.";
     }


}