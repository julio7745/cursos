import './assets/css/style.css';
import GeraCPF from './modules/GeraCPF'



(function () {
    const gera = new GeraCPF()
    const cpf = document.querySelector('#res')
    cpf.innerHTML = gera.geranovoCPF()
})();