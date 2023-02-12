
let pontuacao = 999
let nivel 

if (pontuacao >= 1000) {
    nivel = 'VIP'
}else{
    nivel = 'Normal'
}

console.log(nivel);
pontuacao = 1000

nivel = pontuacao >= 1000 ? console.log('oi') : 'Normal'
console.log(nivel);

