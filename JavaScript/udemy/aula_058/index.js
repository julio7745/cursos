//funções construtora 
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('julio', 'carvalho')
console.log(p1);