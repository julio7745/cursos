
function criaPessoa(nome, sobrenome, idade){
    return {nome, sobrenome, idade}
}
let p1 = criaPessoa('julio', 'carvalho', 18)
Object.freeze(p1)
p1.nome = 'oi'
console.log(p1);


function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}
let p2 = new Pessoa('julio', 'carvalho', 18)
p2.nome = 'oi'
console.log(p2);

