const numeros = [16, 42, 7, 81, 23, 54, 9];
let numeroMayor = numeros[0]           // se usa [0] para iniciar en la pocision 0

for(let i = 0; i < numeros.length; i++){
    if(numeros[i]  > numeroMayor){          // Para comprobar si un número es mayor que otro, usamos el operador >
        numeroMayor = numeros[i]            // el operador = se usa para cambiar el valor de la variable
    }
}
console.log("el numero mayor es:", numeroMayor)