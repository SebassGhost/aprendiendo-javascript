const numeros = [12, 20, 15, 35, 17, 40, 8, 22];
let contador = 0;

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] >= 18){
        contador = contador + 1
    }
}
console.log(contador)