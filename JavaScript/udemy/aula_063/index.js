let nomes = ['julio', 'Cesar', 'Queiroz', 'Carvalho', 'Gabriel', 'Ferreira', 'Nascimento']
console.log(nomes);
console.log(' ');

// .splice(indiceDeInicio, quantDeRemovidos, add1, add2, add3, ...)

const removidos = nomes.splice(3, 1, 'rogerio', 'ciqueira')
console.log(nomes);
console.log(removidos);
console.log(' ');
