const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 10},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 63}
]

const pessoaMaisVelha = pessoas.reduce(function (maisVelha, pessoa){
    if (pessoa.idade > maisVelha.idade) return pessoa 
    return maisVelha
})


console.log(pessoaMaisVelha);
