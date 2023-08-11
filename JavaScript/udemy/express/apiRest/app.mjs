// Importação de pacotes
// Importamos o express
import express from 'express'

// Importação de modulos
// Importamos o express
import HomeRoutes from './src/routes/homeRoutes.mjs'

// Criamos um app usando classe
class App {

    // executamos alguns metodos 
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    // Criamos o metodo de tudo que deve ser executado antes das rotas 
    middlewares(){
        this.app.use(express.urlencoded({extend: true}))
        this.app.use(express.json())
    }

    //Criamos o metodo das rotas
    routes(){
        this.app.use('/', HomeRoutes)
    }
}

// Exportamos um app ja pronto 
export default new App().app;