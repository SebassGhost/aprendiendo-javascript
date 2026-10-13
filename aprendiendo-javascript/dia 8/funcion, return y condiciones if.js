
    function verificarNumero(numeros) {
    if (numeros > 0) {
        return "Positivo";
    } else if (numeros === 0) { 
        return "Cero";
    } else {
        return "Negativo"; // Si no es mayor a 0, ni igual a 0, por descarte es menor a 0
    }
}

let resultadoPositivo = verificarNumero(5);
let resultadoCero = verificarNumero(0);
let resultadoNegativo = verificarNumero(-10);

console.log(resultadoPositivo)
console.log(resultadoCero) 
console.log(resultadoNegativo)