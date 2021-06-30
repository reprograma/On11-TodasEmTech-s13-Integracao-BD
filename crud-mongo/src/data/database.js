const mongoose = require('mongoose')

const connect = () => {mongoose.connect('mongodb://localhost:27017/livros', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('Mongo db conectado')).catch(err =>console.err)
}

module.exports = { connect }


const express = require('express') // importa express
const app = express() //cria a instancia do express

//conectar o mongo com o mongoose
const db = require('./src/data/database')
db.connect()

app.use(express.json())

//usar as rotas


app.listen(3333, ()=> console.log('Servidor rodando'))    //subindo o servidor