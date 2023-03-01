
import GeraCPF from './GeraCPF.js'

(function () {
    const gera = new GeraCPF()
    const cpf = document.querySelector('#res')
    cpf.innerHTML = gera.geranovoCPF()
})();