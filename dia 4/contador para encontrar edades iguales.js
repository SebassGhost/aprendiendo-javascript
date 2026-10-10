//contador para encontrar edades iguales o mayores a 18
const edades = [12, 20, 15, 35, 17];
let contador = 0;

for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
        contador = contador + 1;
    }
}

console.log("Personas mayores de edad:", contador);