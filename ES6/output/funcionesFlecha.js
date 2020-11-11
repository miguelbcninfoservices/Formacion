"use strict";

var nombres = ["Carlos", "Miguel", "Cesar"];
var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombres.length, " letras");
}); // const numero_caracteres = nombres.map(function(nombre){
//     return `${nombre} tiene ${nombres.length} letras`;
// });

console.log(numero_caracteres); // (parametro) => {
//     return // codigo a ejecutar
// }