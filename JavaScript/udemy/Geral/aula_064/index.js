const nomes1 = ['julio', 'Cesar']
const nomes2 = ['Queiroz', 'Carvalho']

let nome = nomes1.concat(nomes2)
console.log(nome);

nome = [...nomes1, ...nomes2]
console.log(nome);

nome = [...nomes1, ...nomes2, 'julio']
console.log(nome);