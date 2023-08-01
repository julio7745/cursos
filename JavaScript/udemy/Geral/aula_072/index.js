
function Produto(nome, preco, estoque){
    this.nome= nome;
    this.preco = preco;

    Object.defineProperties(this, 'estoque', {
        enumerable:true,
        get: () => estoque,
        set: (valor) => {
            console.log(valor);
            if (typeof valor == 'number') {estoque = valor}}
    })
}

const prod1 = new Produto('camisa', 18, 5)
console.log(prod1);
console.log(prod1.estoque);
prod1.estoque = 40
console.log(prod1.estoque);

