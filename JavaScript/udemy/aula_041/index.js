function randon (min, max){
    let n = Math.random() * (max+1 - min) + min
    return n.toFixed(2);
}

let maior = 0
for (i = 0; i < 2; i++){
    let n = randon(1, 50)
    console.log(n);
    n > maior ? maior = n :  n = 0 
}
console.log("------");
console.log(maior);