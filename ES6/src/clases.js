class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre = nombre,
        this.edad = edad,
        this.correo = correo
    }

    mostrarSaludo(mensaje){
        return mensaje;
    }
    
    mostrarInfo(){
        return `
         <b>Nombre:<b> ${this.nombre} <br/>
         <b>Edad: <b>${this.edad} <br/>
         <b>Correo:<b> ${this.correo} <br/>
         <hr/>
        `;
    }
}

const miguel = new Usuario("Miguel Torrijo", 19, "correo@corre.com");
document.write(miguel.mostrarInfo());

class Estudiante extends Usuario {
    constructor(nombre,edad, correo, carrera){
        super(nombre, edad, correo);
        this.carrera = carrera;
    }
    mostrarInfo(){
        return `
         <b>Nombre:<b> ${this.nombre} <br/>
         <b>Edad: <b>${this.edad} <br/>
         <b>Correo:<b> ${this.correo} <br/>
         <b>Carrera:<b> ${this.carrera} <br/>
         <hr/>
        `;
    }
}

const alejandro = new Estudiante("Alejandro", 30, 
"correo", "Desarrollador web");
document.write(alejandro.mostrarInfo());


