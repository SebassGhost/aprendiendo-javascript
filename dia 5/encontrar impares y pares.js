const numeros = [12, 5, 28, 9, 16, 3, 21, 6];

let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {            // se usa para hayar los residuos
        pares = pares + 1;                // esta expresion se usa para sumar 1 cada vez que encuentras algo que cumple la condición
    } else {
        impares = impares + 1;
    }
}

console.log("Total de pares:", pares);
console.log("Total de impares:", impares);