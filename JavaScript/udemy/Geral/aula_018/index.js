/*

function criapessoa(nome, sobrenome, idade) {
    return { nome: nome, sobrenome: sobrenome, idade: idade };
}
const pessoa = criapessoa('julio', 'caravalho', 18);

*/
function pessoa (nome, sobrenome, idade) 
    { 
        return { nome, sobrenome, idade};
        //aqui,, o nome do parametro se torna o atributo
    };

console.log(pessoa('julio', 'carvalho', 18  ));

const pessoa1 =  {
    nome: 'Julio',
    sobrenome: 'Carvalho',
    idade: 18,
    fala (){
        console.log(`${this.nome} ${this.sobrenome} diz oi ... \nminha idade é ${this.idade} `);

    }, 
    aniversario (){
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.aniversario();
pessoa1.fala();


 


