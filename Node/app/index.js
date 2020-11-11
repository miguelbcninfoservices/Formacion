const http = require('http');
const fs = require('fs');
const url = require('url');

const sustituirTarea = require("./modulos/sustituir");

const tareaTemplate =fs.readFileSync(`${__dirname}/templates/tarea.html`,"utf8");

// DATOS prueba
const data =fs.readFileSync(`${__dirname}/data/data.json`,"utf8");
const dataTable = JSON.parse(data);
console.log(dataTable);

// Crear nuestro servidor
const server = http.createServer((req, res) => {

   // //Depuracion
   // console.log(req.url);
   // console.log(url.parse(req.url));

   // Path
   const {query,pathname} = url.parse(req.url,true);

   // Enrutado
   if (pathname === "/nosotros" || pathname === "/") {
      const tareaListaTemplate = dataTable.map(tarea=>sustituirTarea(tarea, tareaTemplate)).join("");
      const index=fs.readFile(`${__dirname}/templates/index.html`,"utf8", 
   (err, data) => {
    if(err){
       res.end("Error");}
    else{
       dataView = data.replace(`{%LISTATAREAS%}`,tareaListaTemplate);
       res.end(dataView);}
});
    
   } else if (pathname === "/tarea"){
      console.log(query);
      const index=fs.readFile(`${__dirname}/templates/detalleTarea.html`,"utf8", 
   (err, data) => {
    if(err){
       res.end("Error");}
    else{
       dataView = sustituirTarea(dataTable[query.id-1],data);
      // dataView = data.replace(`{%LISTATAREAS%}`,tareaListaTemplate);
       res.end(dataView);}
});
   }
   else{
      res.writeHead(404);
      res.end("Pagina no encontrada");
   }
  });

  // Lanzariamos el servidor de forma asincrona
  server.listen(8000,'127.0.0.1',()=>{
     console.log("Servidor escuchando en puerto 8000");
  });