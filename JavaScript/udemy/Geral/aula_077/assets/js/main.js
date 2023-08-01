const btnValidar = document.getElementsByTagName('button')[0]
document.getElementById('CPF').focus()

btnValidar.onclick = function (e) {
    e.preventDefault();
    
    const cpf = pegaCPF()
    const resultado = validaCPF(cpf)
    enviaResultado(resultado)
}
document.addEventListener('keydown', function (e) {
    const cpf = document.getElementById('CPF')
    console.log(e.code);
    if (e.code === 'Backspace') return
    switch (cpf.value.length) {
        case 3:
            cpf.value += '.'
            break;
        case 7:
            cpf.value += '.'
            break;
        case 11:
            cpf.value += '-'
            break;
    }
})

function pegaCPF() {
    const inputcpf = document.getElementById('CPF') 
    const cpf = inputcpf.value
    inputcpf.value = ''
    inputcpf.focus();
    return cpf
}

function validaCPF(cpfString) {
    let cpfArray = separaArray(cpfString)
    const penultimoDigito = pegaPenultimoDigito(cpfArray)
    const ultimoDigito = pegaUltimoDigito(cpfArray)
    
    if ( cpfArray[9] !== penultimoDigito ) return 1
    if ( cpfArray[10] !== ultimoDigito ) return 1

    return 0
    
}

function separaArray(cpfString){
    let cpfArray = []
    for(let i of cpfString){
        isNaN(Number(i)) ? {} : cpfArray.push(Number(i))
    }
    return cpfArray;
}

function pegaPenultimoDigito(cpfArray) {
    let multiplicador = 10
    let total = 0
    for(let i in cpfArray){
        if ( i < 9 ) {
            total += multiplicador * cpfArray[i]
            multiplicador--
        }
    }
    let digito
    11 - (total % 11) > 9 ? digito = 0 : digito = 11 - (total % 11)
    return digito 
}

function pegaUltimoDigito(cpfArray) {
    let multiplicador = 11
    let total = 0
    for(let i in cpfArray){
        if ( i < 10 ) {
            total += multiplicador * cpfArray[i]
            multiplicador--
        }
    }
    let digito
    11 - (total % 11) > 9 ? digito = 0 : digito = 11 - (total % 11)
    return digito
}

function enviaResultado(resultado) {
    const dResultado = document.querySelector('div')
    if (resultado === 0){
        dResultado.innerText = 'CPF valido'
        dResultado.classList.add('valido')
        dResultado.classList.remove('invalido')
        dResultado.classList.remove('limpo')
    }
    if (resultado === 1){
        dResultado.innerText = 'CPF invalido'
        dResultado.classList.add('invalido')
        dResultado.classList.remove('valido')
        dResultado.classList.remove('limpo')
    }
}

