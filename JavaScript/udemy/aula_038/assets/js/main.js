const paragrafos = document.getElementById('parag')
const paragrafo = document.getElementsByTagName('p')
const cor = getComputedStyle(document.getElementsByTagName('body')[0]).backgroundColor
for(let i of paragrafo){
    i.style.backgroundColor = cor
    i.style.color = '#fff'
}