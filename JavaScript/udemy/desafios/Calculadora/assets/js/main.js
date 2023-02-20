/*function criaCalc() {
    return{
        display: document.querySelector('#display'),
        get inicia() {
            this.cliqueBotoes()
            this.enter()
        },
        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target
                if (el.classList.contains('btn-num')){
                    this.btParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')){
                    this.limpaDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.apaga();
                }
                if (el.classList.contains('btn-eq')){
                    this.mostraResultado();
                }
            })
        },
        enter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13){
                    this.mostraResultado()
                }
            })
        },
        btParaDisplay(bt){
            this.display.value += bt
        },
        limpaDisplay(){
            this.display.value = ''
        },
        apaga(){
            this.display.value =  this.display.value.slice(0, -1)
        },
        mostraResultado(){
            try{
                valor = eval(this.display.value)
                valor === undefined ? valor = 0 : {}
                this.display.value = valor
            }catch{
                alert('Valor invalido')
            }
        }
    }
}

const calc = criaCalc()
calc.inicia*/


function Calculadora() {
    this.display = document.querySelector('#display')
    this.inicia = () =>{
        this.cliqueBotoes()
        this.enter()
    }
    this.cliqueBotoes = () =>{
        document.addEventListener('click', (e) => {
            const el = e.target
            if (el.classList.contains('btn-num')){
                this.btParaDisplay(el.innerText);
            }
            if (el.classList.contains('btn-clear')){
                this.limpaDisplay();
            }
            if (el.classList.contains('btn-del')){
                this.apaga();
            }
            if (el.classList.contains('btn-eq')){
                this.mostraResultado();
            }
        })
    }
    this.enter = () =>{
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13){
                this.mostraResultado()
            }
        })
    }
    this.btParaDisplay = (bt) => {
        this.display.value += bt
        this.display.focus();
    }
    this.limpaDisplay = () => this.display.value = ''
    this.apaga = () => this.display.value = this.display.value.slice(0, -1)
    this.mostraResultado = () =>{
        try{
            valor = eval(this.display.value)
            valor === undefined ? valor = 0 : {}
            this.display.value = valor
        }catch{
            alert('Valor invalido')
            return
        }
    }
}

const calc1 = new Calculadora()
calc1.inicia()