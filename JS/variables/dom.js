var divs = document.getElementsByTagName("div");
console.log("el numero de divs es: " + divs.length);
for (var i = 0; i < divs.length; i++) {
  var ids = divs[i].getAttribute("id");
  console.log("el numero de divs es: " + ids);

}
var divId=document.getElementById("segundoDiv");
console.log("el id es" + divId.getAttribute("id"));

// Elementos por debajo del segundo div
var ps = divId.getElementsByTagName("p");
console.log("el numero de ps es: " + ps.length);
for (var i = 0; i < ps.length; i++) {
  var innerText = ps[i].innerHTML;
  console.log("el contenido del parrafo es: " + innerText);

}

// Elemento evento

function manejarClick(){
  console.log("click hecho sobre div");
  var divEventos=event.target;
  divEventos.innerHTML="Texto cambiado"
  divEventos.removeEventListener("click", manejarClick);
}

function load(){
  console.log("Window cargada");
  var divEventos=document.getElementById("eventos");
  divEventos.addEventListener("click",manejarClick,false);
}
window.onload=load;
