let num1 = 53
let num2 = 2.24474

console.log(num1.toString() + num2);
console.log(num1.toString(2));
console.log(num2.toFixed(2));

console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
num2 = "Hello world"
console.log(isNaN(num1));
console.log(isNaN(num2));

//remover imprecisão
Number(num1.toFixed(2));