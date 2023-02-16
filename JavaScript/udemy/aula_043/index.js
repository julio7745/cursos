/*function FB(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz'
    }
    if (n % 3 === 0){
        return 'Fizz'
    }
    if (n % 5 === 0){
        return 'Buzz'
    }
    return n
}*/


const FB = (n) => isNaN(n) ? 'NaN' : n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : n 

for ( n = 0; n <= 100; n++){
    console.log(`${n} --> ${FB(n)}`);
}
n = 'a'
console.log(`${n} --> ${FB(n)}`);