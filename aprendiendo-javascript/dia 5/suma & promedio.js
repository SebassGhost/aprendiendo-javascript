const numeros = [12, 5, 28, 9, 16, 3, 21, 6];
let suma = 0
let promedio


for(let i = 0; i < numeros.length; i++){
    suma = suma + numeros[i]                    // sirve para sumar todos los numeros dentro del array
}
promedio = suma / numeros.length;     // sirve para dividir el resultado de la suma con la cantidad de numeros del array y asi encontrar el promedio

console.log("la suma total es:", suma)
console.log("el promedio es:", promedio)