
function Produto(){

    Object.defineProperties(this,  {
        nome: {
            enumerable: true,
            value: 'Camiseta',
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: 20,
            writable: false,
            configurable: false
        }, 
        estoque: {
            enumerable: false,
            value: 80,
            writable: false,
            configurable: false
        }, 
    })
}

const prod1 = new Produto()
console.log(prod1);
console.log(prod1.estoque);
prod1.estoque = 40
console.log(prod1.estoque);

