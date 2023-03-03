
//podemos exportar funções e classes
module.exports = function (x, y) {
    return x*y
}

//podemos exportar funções em arrow
module.exports = (x, y) => x*y

//podemos exportar obejetos
module.exports = {
    comprimento: 40,
    altura: 80
}
module.exports.largura = 20

//podemos exportar valores literias(lets, vars, e consts)
module.exports = 2