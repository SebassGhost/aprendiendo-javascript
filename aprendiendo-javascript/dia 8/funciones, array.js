const numeros = [-3, 5, 0, 8, -1, 2];

function contarPositivos (numeros){                 // Función que cuenta cuántos números son positivos
    let contador = 0                            // Inicializa el contador en cero
    for(let i = 0; i < numeros.length; i++ ){       // Recorre todos los elementos del array
        if(numeros[i] > 0){                     // Comprueba si el número actual es mayor que cero
            contador = contador + 1     // Aumenta el contador en uno si es positivo
        } 
    } 
    return contador         // Devuelve la cantidad total de números positivos
}


const resultado = contarPositivos(numeros)          // Guarda el resultado que devuelve la función

console.log("numeros positivos:", resultado)        // Muestra la cantidad de números positivos en la consola


/* i: representa la posición del elemento que estamos revisando.

numeros[i]: obtiene el número que se encuentra en esa posición.

return contador: devuelve el total acumulado cuando termina el recorrido.*/