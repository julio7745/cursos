
function handleInputChange(e) {

    const alvo = e.target

    if (alvo.name == 'quantidadeDePassageiros'){
        atualizaPassageiros(alvo.value)
    }else if (alvo.classList.contains('inputQuantidadeDeMalas')){
        atualizaMalas(alvo)
    }

    atualizaSaidas()
    
}

function atualizaPassageiros(novaQuantidadeDePassageiros) {

    if(novaQuantidadeDePassageiros > 15){
        novaQuantidadeDePassageiros = 15
    }
    if(novaQuantidadeDePassageiros < 1){
        novaQuantidadeDePassageiros = 1
    }
    
    let antigosPassageiros = document.getElementsByClassName('passageiro')
    const antigaQuantidadeDePassageiros = antigosPassageiros.length

    if (antigaQuantidadeDePassageiros < novaQuantidadeDePassageiros){
        const numeroDoNovoPassageiro = antigaQuantidadeDePassageiros + 1
        addPassageiro(numeroDoNovoPassageiro)
    }else if (antigaQuantidadeDePassageiros > novaQuantidadeDePassageiros){
        removePassageiro()
    }

    antigosPassageiros = document.getElementsByClassName('passageiro')
    if(antigaQuantidadeDePassageiros != novaQuantidadeDePassageiros){
        atualizaPassageiros(novaQuantidadeDePassageiros)
    }

    function addPassageiro(numeroDoNovoPassageiro) {

        const divPassageiro = document.createElement('div')
        divPassageiro.id = `passageiro${numeroDoNovoPassageiro}`;
        divPassageiro.classList.add('passageiro')

        const tituloPassageiro = document.createElement('h3')
        tituloPassageiro.textContent = `Passageiro ${numeroDoNovoPassageiro}`
        divPassageiro.appendChild(tituloPassageiro)

        const labelQuantidadeDeMalas = document.createElement('label')
        labelQuantidadeDeMalas.htmlFor = `inputQuantidadeDeMalas${numeroDoNovoPassageiro}`
        labelQuantidadeDeMalas.textContent = 'Quantidade De Malas do Passageiro: '
        divPassageiro.appendChild(labelQuantidadeDeMalas)

        const inputQuantidadeDeMalas = document.createElement('input')
        inputQuantidadeDeMalas.name = `inputQuantidadeDeMalas${numeroDoNovoPassageiro}`
        inputQuantidadeDeMalas.classList.add('inputQuantidadeDeMalas')
        inputQuantidadeDeMalas.type = 'number'
        inputQuantidadeDeMalas.min = 0
        inputQuantidadeDeMalas.max = 3
        inputQuantidadeDeMalas.value = 0
        inputQuantidadeDeMalas.addEventListener('input', handleInputChange);
        divPassageiro.appendChild(inputQuantidadeDeMalas)

        const divDeEntradas = document.getElementById('entradas')
        divDeEntradas.appendChild(divPassageiro)

   }

   function removePassageiro() {
        const divDeEntradas = document.getElementById('entradas')
        var ultimoFilho = divDeEntradas.lastChild;
        divDeEntradas.removeChild(ultimoFilho)
   }

}

function atualizaMalas(inputQuantidadeDeMalas) {

    const divPassageiro = inputQuantidadeDeMalas.parentNode;
    const novaQuantidadeDeMalas = inputQuantidadeDeMalas.value
    const antigaQuantidadeDeMalas = divPassageiro.getElementsByClassName('mala').length

    if (antigaQuantidadeDeMalas < novaQuantidadeDeMalas){
        addMala(divPassageiro)
    }else if (antigaQuantidadeDeMalas > novaQuantidadeDeMalas){
        removeMala(divPassageiro)
    }

    function addMala(divPassageiro) {

        const numeroDoPassageiro = parseInt(divPassageiro.id[divPassageiro.id.length - 1])
        const numeroDaMala = divPassageiro.getElementsByClassName('mala').length + 1

        const divMala = document.createElement('div')
        divMala.classList.add('mala')

        const tituloMala = document.createElement('h3')
        tituloMala.textContent = `Mala ${numeroDaMala}`
        divMala.appendChild(tituloMala)

        const labelPesoMala = document.createElement('label') 
        labelPesoMala.htmlFor = `passageiro${numeroDoPassageiro}PesoMala${numeroDaMala}`
        labelPesoMala.textContent = 'Peso da mala (kg): '
        divMala.appendChild(labelPesoMala)

        const inputPesoMala = document.createElement('input') 
        inputPesoMala.name = `passageiro${numeroDoPassageiro}PesoMala${numeroDaMala}`
        inputPesoMala.classList.add('pmala')
        inputPesoMala.type = 'number'
        inputPesoMala.placeholder = '0,0'
        inputPesoMala.value = '0.0'
        inputPesoMala.min = '0'
        inputPesoMala.step = '0.1'
        inputPesoMala.addEventListener('input', handleInputChange);
        divMala.appendChild(inputPesoMala)

        divPassageiro.appendChild(divMala)

    }

    function removeMala(divPassageiro) {
        var ultimoFilho = divPassageiro.lastChild;
        divPassageiro.removeChild(ultimoFilho)
    }
}

function atualizaSaidas() {

    const inputsPeso = document.getElementsByClassName('pmala')

    let arrayComPesos = []
    for (let inputPeso = 0; inputPeso < inputsPeso.length; inputPeso++) {
        arrayComPesos.push({peso: inputsPeso[inputPeso].value, passageiro: inputsPeso[inputPeso].name})
    }
    arrayComPesos.sort(function(a, b) {
        return b.peso - a.peso;
    });

    const numeroTotaldeMalas = arrayComPesos.length
    
    let PesoTotal = 0
    for (let inputPeso = 0; inputPeso < inputsPeso.length; inputPeso++) {
        PesoTotal += parseFloat(inputsPeso[inputPeso].value);
    }

    let totalPesoA = 0
    let totalPesoB = 0

    let MalasA = []
    let MalasB = []
    
    arrayComPesos.forEach(chave => {
        if (totalPesoA <= totalPesoB ){
            totalPesoA += parseFloat(chave.peso)
            MalasA.push(chave)
        }else{
            totalPesoB += parseFloat(chave.peso)
            MalasB.push(chave)
        }
    });
    
    const tituloRelatorioGeral = document.createElement('ul')
    tituloRelatorioGeral.textContent = `Relatório Geral`
    tituloRelatorioGeral.classList.add('tituloResultado')

    const ulSaida = document.createElement('ul')

    const liNumeroTotaldeMalas = document.createElement('li')
    liNumeroTotaldeMalas.textContent = `Número Total de Malas: ${numeroTotaldeMalas}`
    ulSaida.appendChild(liNumeroTotaldeMalas)

    const liPesoTotal = document.createElement('li')
    liPesoTotal.textContent = `Peso Total (kg): ${PesoTotal.toFixed(1)}`
    ulSaida.appendChild(liPesoTotal)

    const liPesoTotalA = document.createElement('li')
    liPesoTotalA.textContent = `Peso Total do Bagageiro A (kg): ${totalPesoA.toFixed(1)}`
    ulSaida.appendChild(liPesoTotalA)
    
    const liPesoTotalB = document.createElement('li')
    liPesoTotalB.textContent = `Peso Total do Bagageiro B (kg): ${totalPesoB.toFixed(1)}`
    ulSaida.appendChild(liPesoTotalB)

    const liNtotalA = document.createElement('li')
    liNtotalA.textContent = `Número Total de Malas do Bagageiro A: ${MalasA.length}`
    ulSaida.appendChild(liNtotalA)

    const liNtotalB = document.createElement('li')
    liNtotalB.textContent = `Número Total de Malas do Bagageiro B: ${MalasB.length}`
    ulSaida.appendChild(liNtotalB)

    const tituloRelatorioEspecifico = document.createElement('ul')
    tituloRelatorioEspecifico.textContent = `Relatório Especifico`
    tituloRelatorioEspecifico.classList.add('tituloResultado')

    const h3A = document.createElement('h3')
    h3A.textContent = `Bagageiro A - (Peso Total: ${totalPesoA.toFixed(1)})`
    h3A.classList.add('bagageiroTitulo')

    const ulA = document.createElement('ul')
    MalasA.forEach(mala => {

        const peso = mala.peso
        const numeroDoPassageiro = mala.passageiro.match(/passageiro(\d+)/)[1];
        const numeroDaMala = mala.passageiro.match(/Mala(\d+)/)[1];

        const li = document.createElement('li')
        li.innerHTML = `<strong>Passageiro</strong>: ${numeroDoPassageiro}, <strong>Mala</strong>: ${numeroDaMala}, <strong>Peso</strong>: ${peso}`

        ulA.appendChild(li)
    });


    const h3B = document.createElement('h3')
    h3B.textContent = `Bagageiro B - (Peso Total: ${totalPesoB.toFixed(1)})`
    h3B.classList.add('bagageiroTitulo')

    const ulB = document.createElement('ul')
    MalasB.forEach(mala => {

        const peso = mala.peso
        const numeroDoPassageiro = mala.passageiro.match(/passageiro(\d+)/)[1];
        const numeroDaMala = mala.passageiro.match(/Mala(\d+)/)[1];

        const li = document.createElement('li')
        li.innerHTML = `<strong>Passageiro</strong>: ${numeroDoPassageiro}, <strong>Mala</strong>: ${numeroDaMala}, <strong>Peso</strong>: ${peso}`

        ulB.appendChild(li)
    });
    
    const resultados = document.getElementById('resultados')
    resultados.innerHTML = '';
    resultados.appendChild(tituloRelatorioGeral) 
    resultados.appendChild(ulSaida)
    resultados.appendChild(tituloRelatorioEspecifico)
    resultados.appendChild(h3A)
    resultados.appendChild(ulA)
    resultados.appendChild(h3B)
    resultados.appendChild(ulB)

} 

window.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.addEventListener('input', handleInputChange);
    });
    atualizaPassageiros(1)
    atualizaSaidas(1)
});

const inputQuantidadeDePassageiros = document.getElementsByName('quantidadeDePassageiros')[0]; 
inputQuantidadeDePassageiros.addEventListener('blur', function () {

    if (parseInt(inputQuantidadeDePassageiros.value) > 15) {
        inputQuantidadeDePassageiros.value = 15;
    }
    if (parseInt(inputQuantidadeDePassageiros.value) < 1) {
        inputQuantidadeDePassageiros.value = 1;
    }
});


