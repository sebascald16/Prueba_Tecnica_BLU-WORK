
/*con esta funcion  si no emcontramos los campos llenos ponemos en deshabilitado el boton*/
function el(el) {
    return document.getElementById(el);
}

el("name", "mail").addEventListener("input", function () {
    if (!this.value.length) { //Si la longitud de la cadena de caracteres es 0 => falsa
        el("submit").disabled = true; //Deshabilitamos el botón
    } else { //Si no...
        el("submit").disabled = false; //Lo habilitamos
    }
});