class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
    }
    get aumentarVolume(){
        this.volume += 2
    }
    get diminuirVolume(){
        this.volume -= 2
    }

    static get trocapilha(){
        console.log('isso não é executado em nenhum objeto');
    }
}

ControleRemoto.trocapilha