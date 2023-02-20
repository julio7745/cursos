function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
}
Produto.prototype.desconto = function (desconto) {
        this.preco = (this.preco / 100) * (100 - desconto)
}
Produto.prototype.aumento = function (desconto) {
        this.preco = (this.preco / 100) * (100 + desconto)
}

const p1 = new Produto('caneca', 200)

const p2 = { nome: 'camisa', preco: 40}
Object.setPrototypeOf(p2, Produto.prototype)

console.log(p1);
console.log(p2);
console.log();

p1.aumento(100)
p2.desconto(50)

console.log(p1);
console.log(p2);