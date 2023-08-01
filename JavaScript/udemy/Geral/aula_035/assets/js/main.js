const elementos = [{tag:'p', texto:'Olá'},
{tag:'div', texto:'Esse site foi criado em JS'},
{tag:'section', texto: 'O que achou?'},
{tag:'footer', texto: 'Bye'}];

let container = document.getElementsByClassName('container')[0];

for( let i = 0; i <= elementos.length; i++){
     let content =  document.createElement(elementos[i].tag);
     content.innerHTML = elementos[i].texto;
     container.appendChild(content);
}
