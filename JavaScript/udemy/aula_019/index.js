let a = ['julio', 'carlos'];
let b = a;
console.log( a, b);

a.push('renato');
console.log( a, b);

a = ['julio', 'carlos'];
console.log( a, b);

b = [...a];
a.push('renato');
console.log( a, b);


