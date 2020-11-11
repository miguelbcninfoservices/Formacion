function registrarUsuario(nombre, pais = "no espeficidado", correo, 
    telefono = "No especificado") {
    return `Nombre: ${nombre}, pais: ${pais}, 
    correo :${correo}, telefono: ${telefono}`
}

console.log(registrarUsuario("Miguel", undefined, 
"migueltorrijo42@gmail.com", ));