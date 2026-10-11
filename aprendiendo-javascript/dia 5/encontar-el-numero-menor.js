const numeros = [35, 14, 8, 27, 3, 19, 6];
let numeroMenor = numeros[0]                    // se usa [0] para iniciar en la pocision 0

for(let i = 0; i < numeros.length; i++ ){
    if(numeros[i] < numeroMenor ){              // Para comprobar si un número es menor que otro, usamos el operador <
        numeroMenor = numeros[i] ;              // sirve pa actualizar el numero menor(asignar un nuevo valor)
    }
}
console.log( "el numero menor es:" , numeroMenor)     // imprimir el resultado en la consola