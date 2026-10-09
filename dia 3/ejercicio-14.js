const numeros = [12, 7, 25, 4, 18, 9, 30]
let numeroMayor = numeros[0]

for(let i = 0; i < numeros.length; i++ ){
    console.log(numeros[i])

    if(numeros[i] > numeroMayor){
    numeroMayor = numeros[i]
    }
}
console.log("el numero mayor es:", numeroMayor)