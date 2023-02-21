
class DispositivoEletronico {
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }
    get ligar(){
        this.ligado = true
        console.log(`${this.nome} esta ligado`);
    }
    get desligar(){
        this.ligado = false
        console.log(`${this.nome} esta desligado`);
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor){
        super(nome)
        this.cor = cor
    }
} 

const d1 = new Smartphone('iphone', 'azul')
console.log(d1);

