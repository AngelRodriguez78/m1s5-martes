console.log("Esto es el archivo de operadores")
//console.log(optimizacionConcatenacion);


//let numero1 = 10;
//let numero2 = 25;

//console.log(`la suma: ${numero1 + numero2}`);

//console.log(`la resta: ${numero2 - numero1}`);

//console.log(`la multiplicacion: ${numero1 * numero2}`);

//console.log(`el residuo de division: ${numero1 % numero2}`);

// alert("Esto es un alert");

let edad1 = 100;

/*
Quiero mostrar un mensaje si la persona es mayor de edad y  otro si la persona
no es mayor de edad.
*/

if (edad1 > 17) {
    console.log("Es mayor de edad");
}
else { console.log("Es menor de edad"); }

if (edad1 == 18) {
    console.log("es mayor de edad");
} else if (edad1 == 100) {
    console.log("es viejo");
} else {
    console.log("es menor de edad")
}

const dia = "jueves";

switch (dia) {
    case "Lunes":
        console.log("hoy es super lunes");
        break;
    case "Martes":
        console.log("hoy es martes");
        break
    case "Miercoles":
        console.log("hoy es miercoles");
        break
    case "jueves":
        console.log("hoy es jueves");
        break
    case "viernes":
        console.log("hoy es viernes");
        break
    case "sabado":
        console.log("hoy es sabado");
        break
    case "Domingo":
        console.log("hoy es domingo");
        break
    default:
        console.log("Dia no existe");
        break
}
for (let i = 0; i < 10; i++) {
// console.log(`el valor actual de i es: ${1}`);
    console.log(`el valor actual de i es: ${i} x ${i} = ${1 * 1}`);
}

//while loop
let n1 = 0;
while (n1 <= 10) {
    console.log(`el valor de n es: ${n1}`);
    n1++;
}

