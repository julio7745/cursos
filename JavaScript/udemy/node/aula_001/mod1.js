
const nome = 'julio'
const sobrenome = 'carvalho'
function fala (){
    console.log(nome + ' ' + sobrenome);
}

/*
module.exports.nome = nome
module.exports.sobrenome = sobrenome
module.exports.fala = fala
*/

exports.nome = nome
this.sobrenome = sobrenome
exports.fala = fala

