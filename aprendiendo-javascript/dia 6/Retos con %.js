const numeros = [14, 7, 22, 5, 18, 11, 4, 9];

let numerosMayores = 0;
let numerosPares = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 10){
        numerosMayores = numerosMayores + 1;
    if(numeros[i] % 2 === 0){
        numerosPares = numerosPares + 1;
    }
    }
}  
console.log("total de numeros mayores que 10:", numerosMayores)
console.log("numeros pares mayores que 10:", numerosPares)