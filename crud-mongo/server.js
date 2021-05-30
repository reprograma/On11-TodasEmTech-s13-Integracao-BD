const express = require('express') // importa express
const app = express() //cria a instancia do express

//conectar o mongo com o mongoose
const db = require('./src/data/database')
db.connect()

//Possibilitando trabalhar com JSON
app.use(express.json())

//usar as rotas
const livrosRouter = require('./src/routes/livros.routes')
app.use('/livros',livrosRouter) //usando as rotas para funcionar o endpoint

app.listen(3333, ()=> console.log('Servidor rodando'))    //subindo o servidor