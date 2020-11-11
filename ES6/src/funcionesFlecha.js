const nombres = ["Carlos", "Miguel", "Cesar"];

const numero_caracteres = nombres.map(nombre => 
     `${nombre} tiene ${nombres.length} letras`);

// const numero_caracteres = nombres.map(function(nombre){
//     return `${nombre} tiene ${nombres.length} letras`;
// });

console.log(numero_caracteres);


// (parametro) => {
//     return // codigo a ejecutar
// }