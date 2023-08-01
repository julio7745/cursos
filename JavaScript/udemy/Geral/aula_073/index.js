 
let produto = {nome: 'caneca', preco: 18.90} 
let outroProduto = produto
outroProduto.nome = 'blusa'
console.log(produto, outroProduto);


produto = {nome: 'caneca', preco: 18.90, cor: 'verde', material: 'porcelana'} 
        //outroProduto = {...produto }
        Object.assign(outroProduto, produto)
outroProduto.nome = 'blusa'
console.log(produto, outroProduto);
console.log('');
console.log(Object.getOwnPropertyDescriptor(produto,'nome'))
console.log(Object.getOwnPropertyDescriptors(produto, 'nome', 'material'))