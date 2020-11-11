// arrays de 2 formas distintas
var fruta = ["Manzana","Pera","Sandia"];
var comida = new Array("Arroz","Pasta","Carne","Postres");

// mostramos la palabra por consola en esa posicion

for (var i = 0; i < fruta.length; i++) {
  console.log("Posicion " + i + " es " + fruta[i]);
}

// muestra esta modificacion, y no la introducida antes
comida[2] = "Helado";
console.log(comida[2]);

// Propiedades de Arrays
console.log("El array es de longitud " + comida.length);
comida.push("Desayunos");
console.log("El array es de longitud " + comida.length);
console.log(comida[4]);
console.log("El indice dentro de comida del elemento pasta seria " + comida.indexOf("Pasta"));
