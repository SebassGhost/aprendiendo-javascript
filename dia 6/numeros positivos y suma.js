const numeros = [-5, 10, 3, -2, 8, 0, 4]; // Arreglo con números positivos, negativos y cero

let numerosMayores = 0; // Contador de números mayores que cero
let sumaPositivos = 0;  // Acumulador para sumar los números positivos

// Ciclo que recorre todos los elementos del arreglo
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 0){  // Comprueba si el número actual es mayor que cero
        numerosMayores = numerosMayores + 1  // Aumenta el contador en uno
        sumaPositivos = sumaPositivos + numeros[i];     // Suma el número positivo al acumulador
    }
}
console.log("numeros mayores:", numerosMayores)
console.log("la suma de positivos es:", sumaPositivos)