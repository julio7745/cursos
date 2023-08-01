//while
let i = 0
while(i <= 10){
    console.log(i);
    i++;
} 

function randon(min, max) {
    const aleatorio = Math.random() * ((max+1) - min) + min;
    return Math.floor(aleatorio);
}
let cont = 0;
let numAleatorio;
while(numAleatorio !== 50){
    numAleatorio = randon(1, 50);
    console.log(numAleatorio);
    cont++
}
console.log("----- " + cont + " -----");