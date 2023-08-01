let nomes = ['Eduardo', 'Maria', 'Joana', 'João']
console.log(nomes);

nomes[0] = 'Julio'
console.log(nomes);

delete nomes[2]
console.log(nomes);

console.log(nomes.length);

nomes.push('eu')
console.log(nomes);

nomes.pop()
console.log(nomes);

nomes.unshift('eu')
console.log(nomes);

nomes.shift()
console.log(nomes);

console.log(nomes.slice(1, 3));

console.log(nomes.join(' '));

nomes = 'julio Cesar Queiroz Carvalho'.split(' ') 
console.log(nomes);