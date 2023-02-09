var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = domingo
    1 = segunda
    2 = terça 
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
*/

switch(diaSem){
    case 0:
        var diaSem = 'Domingo'
        break
    case 1:
        var diaSem = 'Segunda'
        break
    case 2:
        var diaSem = 'Terça'
        break
    case 3:
        var diaSem = 'Quarta'
    break
    case 4:
        var diaSem = 'Quinta'
        break
    case 5:
        var diaSem = 'Sexta'
        break
    case 6:
        var diaSem = 'Sabado'
        break
    default:
        var diaSem = 'ERRO'
        break
}

console.log(`Hoje é ${diaSem}`)