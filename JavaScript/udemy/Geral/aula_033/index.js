const eu = {
    nome : 'Julio',
    sobrenome : 'Carvalho',
    idade : 18, 
    endereco : {
        rua : 'Refinaria Duque de Caxias', 
        numero : 89,
        bairro : 'petrolândia',
        cidade : 'contagem', 
    }
}

const { nome } =  eu 
console.log(nome,'\n\n');

const { escolaridade = 'Não informado'} =  eu 
console.log(escolaridade,'\n\n');

const meuNome = eu.nome;
console.log(meuNome, '\n\n');

const { nome: nome1} =  eu 
console.log(nome1,'\n\n');

const { endereco } = eu
const {rua : rua1} = endereco
console.log(rua1,'\n\n');

const { endereco : {rua : rua2} } = eu
console.log(rua2,'\n\n');

const {endereco: {residencia : complemento = 'Não informado'}} = eu
console.log(complemento, '\n\n');