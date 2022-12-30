var idade = 66
console.log(`Sua idade é ${idade}! `)
if(idade < 16){
    console.log('Voce não vota!')
}else if(idade < 18 || idade > 65){
    console.log('Voto opcional!')
}else{
    console.log('voto obrigatório')
}
