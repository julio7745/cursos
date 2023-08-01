//Curto circuito de Operadores Lógicos

//Podemos checar tudo em js
//returna ultimo valor verdadeiro ou primeiro valor falso 

console.log('Luiz' && 'Maria' && 'Jose');

// são considerados false
// 0 , string vazia, null, undefined e NaN

console.log('Luiz' && 0 && 'Jose');
console.log('Luiz' && '' && 'Jose');
console.log('Luiz' && null && 'Jose');
console.log('Luiz' && undefined && 'Jose');
console.log('Luiz' && NaN && 'Jose');
