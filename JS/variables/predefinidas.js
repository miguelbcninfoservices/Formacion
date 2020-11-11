// te hace la operacion de numeros
function evaluar(){
  var operacion = prompt("introducir la expresion a evaluar");
  var resultado = eval(operacion);
  alert("el resultado es " + resultado);

}

// te dice si es numero o no lo introducido
function evaluarNum(){
  var algo = prompt("introducir algo");
  if(isNaN(algo)){
    alert("no has introducido numero");
  }else{alert("has introducido un numero");}

}

// redondea un numero
function convertirNum(){
  var input=prompt("introduce un numero:");
  var inputParseado = parseInt(input);
  alert("el numero introducido " + input + " se ha convertido a " + inputParseado);
}
