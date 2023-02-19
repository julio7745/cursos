const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
]

const nomeGrande = pessoas.filter( value => value.nome.length >= 7)
console.log('Pessoas que tem nome maior ou igual à sete caracteres');
for(let i of nomeGrande) console.log(i.nome)
console.log('\n');

const idosos = pessoas.filter( value => value.idade > 50)
console.log('Pessoas idosas (idade maior que 50 anos)');
for(let i of idosos) console.log(i.nome)
console.log('\n');


//const nomeTerminaComA = pessoas.filter( value => value.nome[value.nome.length - 1] === 'a')
const nomeTerminaComA = pessoas.filter( value => value.nome.toLowerCase().endsWith('a'))
console.log('Pessoas que o primeiro nome termina em \'a\'');
for(let i of nomeTerminaComA) console.log(i.nome)