function tempo() {
    return Math.random() * (3001 - 1000) + 1000
}

function f1() {
    setTimeout(function () {
        console.log('f1');
        f2()
    }, tempo())
}
function f2(proxima) {
    setTimeout(function (proxima) {
        console.log('f2');
        f3()
    }, tempo())
}
function f3() {
    setTimeout(function () {
        console.log('f3');
    }, tempo())
}
console.log('Executa tudo mas espera uma ser executada pra dps executar a outra');
f1()
//no index2 uma vai esperar a outra terminar   