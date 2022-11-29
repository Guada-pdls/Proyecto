let usuarioConEmail = "guada"
let contrasenia = "1234"

const nombre = prompt("Ingrese su nombre")
let correo = prompt("Ingrese su usuario")
let contra = prompt("Ingrese su contraseña")

function validarUsuario() {
    if (usuarioConEmail !== correo && contra !== contrasenia){
        alert("Su usuario y contraseña son erróneos")
        return false
    } else if (usuarioConEmail !== correo){
        alert("Su usuario es erróneo")
        return false
    } else if (contra !== contrasenia){
        alert("Su contraseña es incorrecta")
        return false
    } else {
        return true
    }
}

const saludar = () => alert(`Bienvenido ${nombre}`)

function validarCorreo(correo) {
    for (let i = 0; i < correo.length; i++) {
        if (correo[i] === "@"){
            return true
        } 
        return false
    }
}

const nums = /[0-9]/

function validarContrasenia(contra) {

    let contieneNums;
    for (letra in contra){
        if (contra[letra].match(nums)){
            contieneNums = true
        }
    }
    
    if (contra.length > 8 && contieneNums){
        return true
    } else {
        return false
    }
}

if (validarUsuario()){
    saludar()
}

if (!validarCorreo(correo)){
    usuarioConEmail = prompt("Su correo es inválido, ingrese uno nuevo")
}

if (!validarContrasenia(contrasenia)){
    contrasenia = prompt("Su contraseña debe contener al menos 8 caracteres y un número. Ingrese una nueva contraseña.")
}