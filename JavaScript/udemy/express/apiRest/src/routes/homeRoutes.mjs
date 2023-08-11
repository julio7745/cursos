// Importação de pacotes
// Importamos as Rotas do Express
import {Router} from 'express'

// Declaramos a variavel que gerencia as requisições da home, utilizando Router do expresss
const router = new Router()

// Declamos as requisições
router.get('/', (req, res) => {
    res.send('oi mundo')
})

//Exportamos as requisições
export default router;