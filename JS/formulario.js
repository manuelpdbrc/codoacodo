let formulario = document.querySelector('.formulario1')

formulario.addEventListener("submit", validar)

function validar (e) {
    validarNombre(e)
    validarApellido(e)
    validarLocalidad(e)
    validarEmail (e)
    validarTitulo (e)
    validarArchivo(e)
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
    let expReg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!expReg.test(email)){
        alert("La dirección de email " + email + " es incorrecta!");
        e.preventDefault()
    }
}

function validarTitulo (e) {
    let titulo = formulario.querySelector('[name="titulo"]')
    if (titulo.value == 0){
        alert("No te olvides de colocar el titulo de tu plato!")
        e.preventDefault()
    }
}

function validarArchivo(e) {
    let archivo = formulario.querySelector('[name="archivo"]')
    if (!archivo.value.includes(".png") && 
        !archivo.value.includes(".jpg") && 
        !archivo.value.includes(".jpeg")) {
        alert("Selecciona una foto!")
        e.preventDefault()
    }
}

function validarCheckbox (e) {
    let terminos = formulario.querySelector(".terminosycondiciones")
    if (terminos.checked == false){
        alert("Acepta los terminos y condiciones para continuar. :)")
        e.preventDefault()
    }
}