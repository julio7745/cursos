import ValidaCPF from './ValidarCPF';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String ( Math.floor(Math.random() * (max - min + 1) + min))
    }

    geranovoCPF(){
        const cpfSemDigitos = this.rand()
        const d1 = ValidaCPF.geraDigito(cpfSemDigitos)
        const d2 = ValidaCPF.geraDigito(cpfSemDigitos + d1)

        const novoCpf = cpfSemDigitos + d1 + d2
        return novoCpf
    }
}