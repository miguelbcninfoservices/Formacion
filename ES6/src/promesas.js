const promesa = new Promise((resolve,reject) => {
    // Accion que se ejecutara
    setTimeout(()=>{
        const exito = false;
        if (exito) {
            resolve("la operacion tuvo exito");
        } else {
            reject("la operacion no tuvo exito");
        }
    },4000);
});

promesa.then((mensaje)=>{
    alert(mensaje);
});

promesa.catch((mensaje)=>{
    alert(mensaje);
});