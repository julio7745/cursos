const numeros = [5, 2, 6, 1, 4, 3]

const final = numeros
    .filter( n => n % 2 === 0)
    .map( n => n * 2)
    .reduce( (total, n) => total += n)

console.log('Numeros:');
console.log(numeros);
console.log('Soma do dobro de todos os pares:');
console.log(final);
