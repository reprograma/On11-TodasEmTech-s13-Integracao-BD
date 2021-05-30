const mongoose = require('mongoose') // importa o mongoose

//cria o esqueleto de como nossos dados serao guardados no Mongo
const livroSchema = new mongoose.Schema({ 
    //nome
    nome: {
        type: String,
        required: true
    },
    //autora
    autora: {
        type: String,
        required: true
    },
    //paginas
    paginas: {
        type: Number,
        required: true
    },
    //data de criacao
    criadoEm: {
        type: Date,
        required: true,
        default:new Date
    }
})

//exporta o esqueleto do nosso documento para usarmos na nossa lógica, lembrando que em conjunto esses documentos já formarão a nossa collection 
module.exports = mongoose.model('livro', livroSchema)