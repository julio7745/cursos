const numeros = [5, 50, 80, 1, 4, 3]

const soma = numeros.reduce((total, n) => total += n)

//const pares = numeros.filter( n => n % 2 === 0)
const pares = numeros.reduce((total, n) => {
    if (n % 2 === 0) total.push(n) 
    return total 
},[])

//const dobro = numeros.map( n => n * 2)
const dobro = numeros.reduce((total, n) => {
    total.push(n*2) 
    return total 
},[])


console.log('Numeros:');
console.log(numeros);
console.log('Soma:');
console.log(soma);
console.log('Pares:');
console.log(pares);
console.log('Dobro:');
console.log(dobro);