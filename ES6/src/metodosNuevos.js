const texto = "Hola mundo";

console.log(texto, "empieza con h:",
texto.toLowerCase().startsWith("h"));

console.log(texto, "termina con o:",
texto.toLowerCase().endsWith("o"));

console.log(texto, "incluye la palabra carlos: " + 
texto.includes("carlos"));

const amigos = ["Carlos","Alejandro","Cesar","Manuel"];
console.log(amigos.includes("Manuel"));

// Encuentra el elemento con mas de 6 caracteres
console.log(amigos.find((amigo) => amigo.length > 6));

// Muestra la posición del elemento a buscar (Carlos)
console.log(amigos.findIndex((amigo)=> amigo === "Carlos"));