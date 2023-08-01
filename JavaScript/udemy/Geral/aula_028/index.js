let data = new Date(); 
console.log(data.toString());

data = new Date(2005, 2, 6, 12, 30, 30); // Ano mes dia hora minuto segundoa milisegundos
console.log(data.toString());

data = new Date('2005-03-06 12:30:30'); // Ano mes dia hora minuto segundoa milisegundos
console.log(data.toString());

data = new Date('2005-03-06T12:30:30'); // Ano mes dia hora minuto segundoa milisegundos
console.log(data.toString());

console.log(data.getDate());
