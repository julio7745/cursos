function mostraHora() {
    let hora = new Date();

    console.log( hora.toLocaleTimeString('pt-BR',{
        hour12: false
    } ))
}

const timer = setInterval(mostraHora, 1000)

setTimeout(function() {
    clearInterval(timer)
}, 10000)