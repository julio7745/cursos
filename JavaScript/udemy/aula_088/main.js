function criaTempo(min = 0, max = 3){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function espera(msg, tempo) {
    return new Promise((resolve1, reject) => {
        setTimeout(() => {
            if ( typeof msg === "number" ) reject('msg ñ pode ser um numero')
            resolve1(msg + ' '+ tempo)
        }, tempo)
    })
}

/*espera('1', criaTempo())
    .then(msg => {
        console.log(msg)
        return espera('2', criaTempo())
    })
    .then(msg => {
        console.log(msg)
        return espera('3', criaTempo())
    })
    .then(msg => {
        console.log(msg)
        return
    })
    .catch(e => console.log(e))*/

async function executa() {
    try{
        let msg = await espera('1', criaTempo())
        console.log(msg)

        msg = await espera('2', criaTempo())
        console.log(msg)

        msg = await espera('3', criaTempo())
        console.log(msg)

        msg = await espera('4', criaTempo())
        console.log(msg)

    }catch(e){
        console.log(e);
    }
}
executa()