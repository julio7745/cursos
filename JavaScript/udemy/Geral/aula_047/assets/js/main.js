const saida = document.querySelector('#saida');
let temp = 0
let contador = 0
let ligado = false
const ajuste = -1000*60*60*21

function play(){
    !ligado ? contador = setInterval(conter, 1000) : {}
    ligado = true
    saida.style.color = 'black'
}

function Reset(){
    ligado = false
    clearInterval(contador)
    saida.style.color = 'red'
    saida.innerHTML = '00:00:00'
    temp = 0
}

function Stop(){
    ligado = false
    clearInterval(contador)
    saida.style.color = 'red'
}

function conter() {
    temp += 1000
    let data = new Date(temp + ajuste)
    saida.innerHTML = `${addZeros(data.getHours())}:${addZeros(data.getMinutes())}:${addZeros(data.getSeconds())}`
}

let addZeros = (n) => n < 10 ? `0${n}` : n
