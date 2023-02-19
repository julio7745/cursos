//funções geradoras
function* geradora1() {
    yield 'valor1'
    yield 'valor2'
    yield 'valor3'
}
const g1 = geradora1()
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log('\n');




function* geradora2() {
    let i = 0
    while (true) {
        yield i
        i++
    }
}
const g2 = geradora2()
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log('\n');




function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4() {
    yield* geradora3();
    yield 3
    yield 4;
}
let g4 = geradora4()
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log('\n');

function* geradora5() {
    yield () => {
        console.log('vim do y1');
    }
    yield () => {
        console.log('vim do y2');
    }
}
let g5 = geradora5()
g5.next().value()
g5.next().value()