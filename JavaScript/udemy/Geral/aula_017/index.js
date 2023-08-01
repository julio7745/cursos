function saudacao(nome) {
    return `oi ${nome}`;
}
console.log(saudacao('Julio'));

function soma(x, y) {
    return x + y ;
}
console.log(soma(2,2));

/*  
    let numero = function (n) {
        return ++;
    };

    let numero = (n) => {
        return ++n;
    };

    let numero = n => ++n ; 
 
*/
let numero = n => ++n ; 
console.log(numero(1));