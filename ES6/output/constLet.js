// Caracteristica nº 1
// Podemos re-declarar variables con var
// Esto puede causar problemas en donde re-declaremos
// var nombre = "Miguel";
// var nombre = "Arturo";
// const pais = "España";
// const pais = "Mexico";
// console.log("Hola " + pais);
// Caracteristica nº 2
// let y const tienen un scape que no podemos acceder dentro de una funcion
// function saludo(){
//     let nombre = "Miguel";
//     return 'Hola' + nombre;
// }
// console.log(nombre);
// Caracteristica nº 3
// let y const tienen un scope de tipo bloque
// let edad = 18;
// if (edad >= 18) {
//     const adulto = true;
// }
// console.log(adulto);
// Caracteristica nº 4
// const lo usamos para constantes que no cambian
// const nombre = "Carlos";
// nombre = "Arturo";
// const colores = ["Rojo", "Verde"];
// colores.push("Azul");
// console.log(colores);
"use strict";