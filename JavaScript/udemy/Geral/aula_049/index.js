//FUNÇÕES

//padrão
function falaOi() {
    console.log('oi')
    return 'oi --> retorno da função'
}
falaOi()
console.log('');

//como dado
const souUmDado = function () {
    console.log('Daduuu')
}
souUmDado()
console.log('');

//Executar função com outra função
function executaFuncao(funcaoASerExecutada) {
    funcaoASerExecutada()
}
executaFuncao(souUmDado)
console.log('');

//Arrow function
const funcao = () => console.log('sou uma função');
funcao();
console.log('');


//dentro de objeto
/*const objeto = {
    falar: function () {
        console.log('oii  2 ')
    }
}*/
const objeto = {
    falar () {
        console.log('oii  2 ')
    }
}
objeto.falar()
console.log('');

//funções são dados 
let a = falaOi
console.log(a);
a = falaOi()
console.log(a);

