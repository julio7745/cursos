const frutas = ['pera', 'maça', 'uva'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}console.log();

for (let i in frutas){
    console.log(frutas[i]);
}console.log();

const pessoa = {
    nome:'Julio',
    sobrenome: 'Carvalho',
    idade: '18'
}
for (let i in pessoa){
    console.log(i);
}
for (let i in pessoa){
    console.log(pessoa[i]);
}console.log();
