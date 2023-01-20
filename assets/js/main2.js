"use strict";

console.log("Console log desde otro.js");


let carName ="volvo";
let driver ="juan"
let X=50;
let a=5  // let a="5"
let b=10 // Let b="10"
let texto1 ="El conductor"
let texto2 ="tiene un"


let suma = a+b; // let suma = number(a) + number(b)
let concatenacion = carName + driver;

console.log("la suma es:", suma);
console.log("La concatenacion es:", concatenacion);

let concatenacion2 = (carName + " " +driver)

console.log ("La concatenacion opcion 2:", concatenacion2);

let concatenacion3 = (texto1 + " " + driver + " " + texto2 + " " + carName)

console.log ("La concatenacion opcion 3:", concatenacion3);

//string template en javascript
let optimizacionConcatenacion = `El conductor ${driver} tiene un ${carName}`;
console.log ("La concatenacion opcion 4:",optimizacionConcatenacion);







