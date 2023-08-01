
document.addEventListener('click', e => {
    e.preventDefault()

    const el = e.target
    const tag = el.tagName.toLowerCase(el)

    if (tag === 'a') carrega(el)
})

async function carrega(el) {
    const href = el.getAttribute('href')
    
    try{
        const xhl = await fetch(href)
        if ( xhl.status !== 200 ) throw new Error('erro')
        const txt = await xhl.text()
        load(txt)
    }catch(e){
        console.log(e);
        console.warn(e);
        console.error(e);
    }
    
    
    /*fetch(href)
        .then(xhl => {
            if ( xhl.status !== 200 ) throw new Error('erro')
            return xhl.text();
        })
        .then(txt => load(txt))
        .catch(e => {
            console.log(e);
            console.warn(e);
            console.error(e);
        })*/
}

function load(response) {
    const res = document.getElementById('res')
    res.innerHTML = response
}

