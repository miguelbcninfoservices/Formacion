"use strict";

var usuario = {
  nombre: "Miguel",
  correo: "correo@correo.com",
  edad: 20,
  pais: "España"
};
var nombre = usuario.nombre,
    pais = usuario.pais,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? "no espeficidado" : _usuario$profesion;

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? "informatico" : _ref$profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario);
;