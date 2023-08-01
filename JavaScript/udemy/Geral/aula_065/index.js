const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
let maiorQueDez = []

/*for (const i in numeros) {
    numeros[i] > 10 ? maiorQueDez.splice(maiorQueDez.length, 0, numeros[i]) : {}
}*/

maiorQueDez = numeros.filter( valor => valor > 10)

console.log(maiorQueDez);

