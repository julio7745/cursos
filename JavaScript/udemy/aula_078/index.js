
//CONTA
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta
    this.saldo = saldo
}
Conta.prototype.sacar = function (valor) {
    if (valor <= this.saldo){
        this.saldo -= valor
    }else{
        console.log(`Saldo insufuciente || Saldo:${this.saldo} `);
        return
    }
    this.verSaldo()
}
Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} || Saldo: ${this.saldo.toFixed(2)}`);
}

//CONTA CORRENTE
function ContaCorrente(agencia, conta, saldo, limite = 100) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente
ContaCorrente.prototype.sacar = function (valor){
    if (valor <= this.saldo + this.limite){
        this.saldo -= valor
    }else{
        console.log(`Saldo insufuciente || valor:${valor} Saldo:${this.saldo} `);
        return
    }
    this.verSaldo()
    
}

//CONTA POUPANSA
function ContaPoupansa(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupansa.prototype = Object.create(Conta.prototype)
ContaPoupansa.prototype.constructor = ContaPoupansa




const CC = new ContaCorrente(11, 22, 100, 100) 
const CP = new ContaPoupansa(22, 44, 100, 100) 

console.log(CC);
console.log(CP);

CC.sacar(90)
CP.sacar(90)

CC.sacar(100)
CP.sacar(100)