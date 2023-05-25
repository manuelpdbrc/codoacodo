let formulario = document.querySelector('.formulario1')

formulario.addEventListener("submit", validar)

function validar (e) {
    e.preventDefault()
    validarNombre(e)
    validarApellido(e)
    validarLocalidad(e)
    validarEmail (e)
    validarTitulo (e)
    validarCheckbox(e)

}

function validarNombre (e) {
    let nombres = formulario.querySelector('[name="nombres"]')
    if (nombres.value == 0){
        alert("Ups, parece que no completaste el nombre!")
        e.preventDefault()
    }
}

function validarApellido (e) {
    let apellidos = formulario.querySelector('[name="apellidos"]')
    if (apellidos.value == 0){
        alert("Ups, te falto escribir el apellido!")
        e.preventDefault()
    }
}

function validarLocalidad (e) {
    let localidad = formulario.querySelector('[name="localidad"]')
    if (localidad.value == 0){
        alert("Para saber de donde viene tu creacion completa tu localidad!")
        e.preventDefault()
    }
}

function validarEmail (e) {
    let email = formulario.querySelector('[name="email"]').value
    let expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    if (expReg.test(email)){
        alert("La dirección de email " + email + " es correcta.");
       } else {
        alert("La dirección de email es incorrecta.");
       }
}

function validarTitulo (e) {
    let titulo = formulario.querySelector('[name="titulo"]')
    if (titulo.value == 0){
        alert("No te olvides de colocar el titulo de tu plato!")
        e.preventDefault
    }
}


function validarCheckbox (e) {
    let terminos = formulario.querySelector(".terminosycondiciones")
    if (terminos.checked == false){
        alert("Acepta los terminos y condiciones para continuar. :)")
        e.preventDefault()
    }
}