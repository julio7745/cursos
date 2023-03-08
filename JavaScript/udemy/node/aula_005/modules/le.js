const fs = require('fs')
const path = require('path')

function ler(camihoArquivo) {
    const lido = fs.readFileSync(camihoArquivo, 'utf-8')
    return JSON.parse(lido)
}

camihoArquivo = path.resolve(__dirname, '..', 'textos/eu.json')
console.log(ler(camihoArquivo));