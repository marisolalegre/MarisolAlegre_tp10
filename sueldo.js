let nombre = "Cristina";
let apellido = "Vegas";
let sueldoActual = $501257;
let porcentajeAumento = 25;

let calculoAumento = (sueldoActual * porcentajeAumento)/100;
let nuevoSueldo = calculoAumento + sueldoActual;

console.log("Hola, estimad@:" + nombre + " " + apellido +
    "En base a su sueldo actual:" +  sueldoActual + " " +
    "Ha recibido un aumento del 25%:" + calculoAumento + " " +
    "y su nuevo sueldo es de:" + " " + nuevoSueldo);