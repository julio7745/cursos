
const _velocidade = Symbol('velocidade')

class Carro {
    constructor(){
        this[_velocidade] = 0
    }
    get velocidade(){
        return this[_velocidade]
    }
    set velocidade(velocidade){
        if (velocidade > 100) return
        this[_velocidade] = velocidade
    }
}

const c1 = new Carro();
console.log(c1.velocidade);

c1.velocidade = 10000
console.log(c1.velocidade);

c1.velocidade = 100
console.log(c1.velocidade);