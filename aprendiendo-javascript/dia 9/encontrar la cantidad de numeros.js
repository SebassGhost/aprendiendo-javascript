const numeros = [4, 5, 5, 6, 7, 50, 7, -5, 0, -8, 3];


function contarNumeros(numeros){
    let contador = 0;
    for(let i = 0; i < numeros.length; i++){
        contador++;
    }
    return contador 
}

const resultado = contarNumeros(numeros)
console.log("el total de numeros es:", resultado)