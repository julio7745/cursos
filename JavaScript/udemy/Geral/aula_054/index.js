function tempo() {
    return Math.random() * (3001 - 1000) + 1000
}

function f1() {
    setTimeout(function () {
        console.log('f1');
    }, tempo())
}
function f2() {
    setTimeout(function () {
        console.log('f2');
    }, tempo())
}
function f3() {
    setTimeout(function () {
        console.log('f3');
    }, tempo())
}
console.log('Executa tudo independe do tempo de execução anterior');
f1()
f2()
f3()

//no index2 uma vai esperar a outra terminar   