const fs = require('fs')
const path = require('path')

const camihoArquivo = path.resolve(__dirname, '..', 'textos/text1.txt')
fs.writeFileSync(camihoArquivo, 'oi do w\n', { flag: 'w' }) //sobreescreve ou cria
fs.writeFileSync(camihoArquivo, 'oi do a1\n', { flag: 'a' }) //adiciona no final ou cria
fs.writeFileSync(camihoArquivo, 'oi do a2\n', { flag: 'a' })


const eu = [
    {
        nome: 'julio', 
        sobrenome
    },
    {
        nome: 'julio', 
        sobrenome: 'carvalho'
    },
    {
        nome: 'julio', 
        sobrenome: 'carvalho'
    }
]
const euJSON = JSON.stringify(eu, '', 2)
const camihoEuJSON = path.resolve(__dirname, '..', 'textos/eu.json')
fs.writeFileSync(camihoEuJSON, euJSON, { flag: 'w' }) 

