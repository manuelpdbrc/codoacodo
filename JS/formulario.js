let formulario = document.querySelector('.formulario1')

formulario.addEventListener("submit", validar)

function validar (e) {
    e.preventDefault()
    validarNombre(e)
    validarCheckbox(e)

}

function validarNombre (e) {
    let nombres = formulario.querySelector('[name="nombres"]')
    if (nombres.value == 0){
        alert("Ups, parece que no completaste el nombre!")
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