// funcion para calcular el iva
function calcularIVA(iva){
  var precio = prompt("Precio de producto");
  if(isNaN(precio)){
    alert("no has introducido numero");
    return false;
  }else{
    precioConIVA = parseFloat(precio)*(1+iva/100);
    alert("precio con iva: " + precioConIVA);
    return true;
  }

}
var iva = prompt("cual es el iva a calcular:");
calcularIVA(iva);
