// Primer mecanismo para la creacion de objetos
// constructor
function Manzana(tipo){
  this.tipo = tipo;
  this.color = "roja";
  this.numero = 5;
  this.cambioNumero=function(numero){
    if (isNaN(numero)){
      console.log("te has equivocado");
    } else {
      this.numero=numero;
    }
  };
}

var golden = new Manzana("Golden");
golden.tipo = "golden";
golden.numero = 4;
golden.cambioNumero(10);

console.log("la manzana es de tipo: " + golden["tipo"]);
console.log("el objeto golden tiene : " + golden["numero"]
+ " manzanas");

// Literales o arrays asociativos
var Sandia ={
  tipo: "De agua",
  color: "Rojo",
  numero:6,
  cambioNumero:function(numero){
    if (isNaN(numero)){
      console.log("te has equivocado");
    } else {
      this.numero=numero;
    }
  }
};

Sandia.tipo="Sin pepitas";
Sandia.variedad = "valencia";
golden.cambioNumero(5.6);
console.log("la sandia es de tipo: " + Sandia["variedad"]);
