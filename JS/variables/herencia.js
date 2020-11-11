var departamento ={
  nombre:"informatica",
  numeroEmpleados:34,
  imprimeNombre:function(){
    texto = "El nombre del departamento es:" + this.nombre;
    console.log(texto);
    return texto;
  }
}


// Vamos a utilizar el objeto departamento
var oficina = Object.create(departamento);
var empleado=Object.create(oficina);
var companyero=Object.create(empleado);
//var nombreDep=empleado.imprimeNombre();
//alert(nombreDep);
empleado.imprimirCompanyeros=function(){
  texto="el numero de compañero es: " + this.numeroEmpleados;
  console.log(texto);
  return texto;
}
empleado.imprimirCompanyeros();
