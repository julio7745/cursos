
function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}
const eu = new Pessoa('julio', 'carvalho', 18)
Object.defineProperty(eu, 'nome', {writable: 0, configurable: 0})
eu.nome = 'lio'
console.log(eu);


const vc = new Pessoa('julio', 'carvalho', 18)
Object.defineProperties(vc, { nome:{ writable: 0 }, sobrenome:{ writable: 0 } })
vc.nome = '1'
vc.sobrenome = 'a'
console.log(vc);

