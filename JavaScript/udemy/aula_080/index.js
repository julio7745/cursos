class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falarNome(){
        console.log(`oi meu nome é ${this.nome}`);
    }
    falarNomeCompleto(){
        console.log(`oi meu nome completo é ${this.nome} ${this.sobrenome}`);
    }
}

const p = new Pessoa('julio', 'carvaho' );

console.log(p);
p.falarNome()
p.falarNomeCompleto()