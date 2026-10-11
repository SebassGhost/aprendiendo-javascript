const numeros = [12, 7, 25, 4, 18, 9, 30, 2];   // Arreglo que contiene los números que vamos a analizar

let numerosMayores = 0;     // Contador de números mayores o iguales a 10
let numerosMenores = 0;     // Contador de números menores que 10
let sumaMayores = 0;        // Acumulador que suma los números mayores o iguales a 10

// Ciclo for que recorre todos los elementos del arreglo
for(let i = 0; i < numeros.length; i++){
    if(numeros[i]  >= 10){              // Comprueba si el número actual es mayor o igual a 10
        numerosMayores = numerosMayores + 1;        // Aumenta en uno el contador de números mayores
        sumaMayores = sumaMayores + numeros[i];     // Suma el valor del número actual al acumulador
    } else{
        numerosMenores = numerosMenores + 1;        //Aumenta en uno el contador de números menores que 10
    }
}
console.log("numeros mayores:", numerosMayores)
console.log("numeros menores:", numerosMenores)