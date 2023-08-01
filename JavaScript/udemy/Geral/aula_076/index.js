function Produto(nome, preco) {
        this.nome = nome,
        this.preco = preco
}
Produto.prototype.aumento = function (aumento){ this.preco += aumento };

function Camiseta(nome, preco, cor) {
        Produto.call(this, nome, preco);         //camiseta sera criada por produto, mas o this referesse a camiseta
        this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype) //O prototype de camiseta recebe o msm de um objeto criado em produto
Camiseta.prototype.constructor = Camiseta //O construtor de camiseta chama camiseta
Camiseta.prototype.desconto = function (desconto){ this.preco -= desconto };

const c1 = new Camiseta ('regata', 20, 'azul')
console.log(c1);

c1.desconto(10) //desconto é de camiseta
console.log(c1);

c1.aumento(10) //aumento é de produto
console.log(c1);

console.log(Object.getPrototypeOf(c1));