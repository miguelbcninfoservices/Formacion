"use strict";

function registrarUsuario(nombre) {
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "no espeficidado";
  var correo = arguments.length > 2 ? arguments[2] : undefined;
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "No especificado";
  return "Nombre: ".concat(nombre, ", pais: ").concat(pais, ", \n    correo :").concat(correo, ", telefono: ").concat(telefono);
}

console.log(registrarUsuario("Miguel", undefined, "migueltorrijo42@gmail.com"));