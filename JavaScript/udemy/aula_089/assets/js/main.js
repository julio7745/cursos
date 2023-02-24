/*const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // xhr.open('metodo', 'url', 'assincrono?')
        // xhr.open('GET', 'url', true)
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', (e) => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            }else{
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', e => {
    e.preventDefault()

    const el = e.target
    const tag = el.tagName.toLowerCase(el)

    if (tag === 'a') carrega(el)
})

function carrega(el) {
    const href = el.getAttribute('href')
    console.log(href);

    request ({
        method: 'GET',
        url:href,
    })
    .then( response => load(response))
    .catch( errorText => alert('Erro ao carregar o conteudo'))
}

function load(response) {
    const res = document.getElementById('res')
    res.innerHTML = response
}*/


const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // xhr.open('metodo', 'url', 'assincrono?')
        // xhr.open('GET', 'url', true)
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', (e) => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            }else{
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', e => {
    e.preventDefault()

    const el = e.target
    const tag = el.tagName.toLowerCase(el)

    if (tag === 'a') carrega(el)
})

async function carrega(el) {
    const href = el.getAttribute('href')
    console.log(href);

    try{
        const response = await request ({
            method: 'GET',
            url:href,
        })
        load(response)
    }catch (e){
        console.log(e);
    }
}

function load(response) {
    const res = document.getElementById('res')
    res.innerHTML = response
}