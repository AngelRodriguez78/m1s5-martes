"use strict";

//console.log("Que pedo");
//console.log("Que pedo2");
//console.log("Que pedo3");

var nombre = "juan";  // se puede reasignat pero tiene otro alcance mas global.. no se recomienda en la actualizad
var edad = 30;

const fechaNacimiento ="17/08/1993"; // no se puede reasginar (no deberia)

let apellido ="Perez";
console.log(apellido);
apellido ="Gomez";
console.log(apellido);
console.log(edad);

/*
Esto es un comentario
*/

let nombreCompleto = "Jesus Cardenas"; // string(texto)
let telefono = 123456789; // number (numero)
let humano = true // Boolean (True/False) Indica que puede ser verdade o falso
let direccion;
let codigoPostal = null;
/*
console.log("nombreCompleto",typeof nombreCompleto);
console.log("telefono", typeof telefono);
console.log("humano", typeof humano);
console.log("direccion", typeof direccion);
console.log("codigoPostal", typeof codigoPostal);
*/

nombreCompleto= String(7);
telefono = Number("987654321");

console.log("nombreCompleto", nombreCompleto);
console.log("telefono",  telefono);
console.log("humano",  humano);
console.log("direccion",  direccion);
console.log("codigoPostal", codigoPostal);







