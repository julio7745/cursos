function numeroAleatorio (min, max){
    let n = (Math.random() * (max+1 - min) + min).toFixed(2)
    console.log(n);
    return n;
}

const maior = (x, y) => x > y ? x : y

console.log( "\n" + maior ( Number(numeroAleatorio(1, 50)), Number(numeroAleatorio(1, 50)) ) );