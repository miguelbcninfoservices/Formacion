function mostrarEvento(){
  console.log(event.type);
}

function mostrarEventoKey(){
  console.log(event.type);
  console.log(event.code);
  console.log("caracter: " + String.fromCharCode(event.charCode));
}
function load(){
  console.log("Window cargada");
  document.onkeypress=mostrarEventoKey;
}
window.onload=load;
