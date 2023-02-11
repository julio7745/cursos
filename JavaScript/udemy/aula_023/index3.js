// o or retorna o primeiro valor verdadeiro 

let corPadrão = 'preto'
let corUsuario = ''
let corDoSite

//Vamos simplificar isso 
if (corUsuario != '') {
    corDoSite = corUsuario
} else {
    corDoSite = corPadrão
}
console.log(corDoSite);

corUsuario = 'red'
if (corUsuario != '') {
    corDoSite = corUsuario
} else {
    corDoSite = corPadrão
}
console.log(corDoSite);

//EX 1
corUsuario = ''
corDoSite = corUsuario || corPadrão
console.log(corDoSite);

corUsuario = 'red'
corDoSite = corUsuario || corPadrão
console.log(corDoSite);
