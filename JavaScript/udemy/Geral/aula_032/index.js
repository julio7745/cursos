let a = 'A';    //B
let b = 'B';    //C
let c = 'C';    //A

let numeros;

[a, b , c] = [b, c, a]
console.log(a, b, c, "\n\n");



numeros = [1, 2, 3, 4];
[a, b, ...c] = numeros
console.log(a, b, c, "\n\n");

numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
[a, b, c] = numeros
console.log(a, b, c);
console.log(a[1], b[2], c[0]);



