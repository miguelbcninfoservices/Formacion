"use strict";

var promesa = new Promise(function (resolve, reject) {
  // Accion que se ejecutara
  setTimeout(function () {
    var exito = false;

    if (exito) {
      resolve("la operacion tuvo exito");
    } else {
      reject("la operacion no tuvo exito");
    }
  }, 4000);
});
promesa.then(function (mensaje) {
  alert(mensaje);
});
promesa["catch"](function (mensaje) {
  alert(mensaje);
});