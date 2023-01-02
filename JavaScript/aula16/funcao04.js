let fatorial = function (x) {
    let result = 1 
    for(; x > 0; x--){
        result *=  x
    }
    return result
}
console.log(fatorial())