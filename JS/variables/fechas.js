// dos objetos de tipo fechas
var hoy = new Date();
var futuro = new Date(2020,11,2);
// sacar por pantalla
alert("fecha de hoy:" + hoy);
alert ("fecha futuro" +  futuro);
// tiempo restante
var tiempoRestante = futuro - hoy;
alert ("tiempo restante" + tiempoRestante);
