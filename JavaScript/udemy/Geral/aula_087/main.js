function criaTempo(min=1, max=5){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function espera(msg, tempo) {
    return new Promise((resolve1, reject) => {
        if ( typeof msg === "number" ) reject('msg ñ pode ser um numero')
        setTimeout(() => {
            resolve1(msg + ' '+ tempo)
        }, tempo)
    })
}

const promisses = [
    espera ('1', criaTempo(1, 5)),
    espera ('2', criaTempo(1, 5)),
    espera ('3', criaTempo(1, 5)),
]

Promise.all(promisses)
    .then((msg)=>{
        console.log(msg);
    })
    .catch((e)=>{
        console.log(e);
    })


Promise.race(promisses)
    .then((msg)=>{
        console.log(msg);
    })
    .catch((e)=>{
        console.log(e);
    })