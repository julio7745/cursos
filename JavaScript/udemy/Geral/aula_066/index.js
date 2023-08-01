let numeros = [5, 51, 80]
console.log(numeros);

for(let i in numeros) numeros[i] *= 2
console.log(numeros);

numeros = numeros.map(n => n * 2)
console.log(numeros);
