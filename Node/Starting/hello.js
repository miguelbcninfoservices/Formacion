const fs = require('fs');

// Sincrona
const documento=fs.readFileSync("documento.txt","utf8");

// console.log(documento);
console.log("Archivo leido Sincrona");

// Asincrona
const documento2=fs.readFile("documento.txt","utf8", 
(err, data) => {
    if(err){console.log("Ha habido un error");}
    else{console.log(data);}
});
console.log("Archivo leido Asincrona");
// const data = documento + " Miguel";
// fs.writeFileSync("documento.txt", data);

