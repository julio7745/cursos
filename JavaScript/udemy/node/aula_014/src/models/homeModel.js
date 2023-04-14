const mongoose = require('mongoose') //importando modulo de base de dados

//criando um formato de dado pro banco de dados (Schema)

//nesse modelos temas duas entradas
//  titulo -> do tipo String e é obrigatorio
//  descrição -> do tipo String e não obrigatório       

const HomeSchema = new mongoose.Schema({        
    titulo: { type: String, required: true},
    descricao: String
})

//Criando o modelo de nome 'home' e exportanto
const homeModel = mongoose.model('home', HomeSchema)

module.exports = homeModel