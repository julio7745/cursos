
/* 
    Comandos de navegadr (Não simplificado)

    window.alert();
    window.confirm();
    window.prompt();

    podemos ocultar o window.
*/

//Como são funções, podemos salvar o retorno numa variavel

let confirmacao = confirm('a proxima janela ira exibir sua resposta!')
alert(`Voce apertou o botão aquivalente à: ${confirmacao}`)

let num1 = prompt('Agora somaremos 2 numeros \nDigite o 1° numero')
let num2 = prompt('Digite o 2° numero!')

alert(`A soma é ${Number(num1) + Number(num2)}`)
