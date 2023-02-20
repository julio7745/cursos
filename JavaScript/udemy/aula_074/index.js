 
function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
}
Pessoa.prototype.nomeCompleto = function () {
        return `${this.nome} ${this.sobrenome}`
}


const p1 = new Pessoa('Julio', 'Carvalho');
const p2 = new Pessoa('Casemiro', 'fernandes');

console.dir(p1.nomeCompleto());
console.dir(p2);