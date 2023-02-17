
function criaFuncao(nome) {
    return function () {
        return nome
    }
}

const funcao = criaFuncao('julio');

