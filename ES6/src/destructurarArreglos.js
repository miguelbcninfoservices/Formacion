const persona = ["Miguel", 20, "España"];

const [nombre, , pais, profesion = "no especificado"] = persona;

const mostrarInfo = ([nombre, ,pais, profesion = "No especificado"] = persona) => 
    console.log(nombre, profesion);

mostrarInfo(persona);