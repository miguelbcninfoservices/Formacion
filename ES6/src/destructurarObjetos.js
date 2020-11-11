const usuario = {
    nombre: "Miguel",
    correo: "correo@correo.com",
    edad: 20,
    pais: "España",
    
}

const{nombre, pais, profesion = "no espeficidado"} = usuario;

const mostrarInfo = ({nombre, profesion = "informatico"}) =>
    console.log(`${nombre} es ${profesion}`);


mostrarInfo(usuario);;