const numeros = [4, -2, 7, -5, 0, -8, 3];

function contarNegativos(numeros){
    let contador = 0;                           // Inicializa el contador en cero
    for (let i = 0; i < numeros.length; i++){           //ciclo para recorrer el array
        if(numeros[i] < 0)
            contador = contador +1;            
    }
    return contador             // Devuelve la cantidad total de números negativos
}

const resultado = contarNegativos(numeros)
console.log("numeros negativos:", resultado)