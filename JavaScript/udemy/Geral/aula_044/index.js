function numero(n) {
    if(isNaN(n)){
        throw new TypeError("NaN")
    }  
    return n 
}

try{
    console.log(numero('a'));
}catch(e){
    console.log(e)
}