const crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarInfo(){
            return `${nombre} tiene ${edad} años`;
        }  
        }
    }


console.log(crearObjeto("Miguel", 20).mostrarInfo());