function criaTempo(min=1, max=5){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

/*
function espera(msg, tempo, callback) {
    setTimeout(() => {
        console.log(msg,tempo);
        if (callback) callback();
    }, tempo)
}

espera('oi 1', criaTempo(1, 5), () => {
    espera('oi 2', criaTempo(1, 5), () => {
        espera('oi 3', criaTempo(1, 5))
    })
});
*/

function espera(msg, tempo) {
    return new Promise((resolve1, reject) => {
        if ( typeof msg === "number" ) reject('msg ñ pode ser um numero')
        setTimeout(() => {
            resolve1(msg)
        }, tempo)
    })
}

espera('oi 1', criaTempo(1, 5))
    .then(msg => {
        console.log(msg);
        return espera('oi 2', criaTempo(1, 5))
    })
    .then(msg => {
        console.log(msg);
        return espera('oi 3', criaTempo(1, 5))
    })
    .then(msg => {
        console.log(msg);
        return espera(4, criaTempo(1, 5))
    })
    .then(msg => {
        console.log(msg);
        return espera('oi 5', criaTempo(1, 5))
    })
    .catch(e => {
        console.log(e);
    })
