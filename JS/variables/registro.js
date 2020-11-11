function manejarClick(){
  console.log("click hecho sobre pagina");
  document.removeEventListener("click", manejarClick);
}

function load(){
  console.log("Window cargada");
  document.addEventListener("click",manejarClick,false);
}

window.onload=load;
