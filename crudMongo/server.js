const express = require("express")
const app = express()


//conectar o mongo com o mongoose
const db = require("./src/data/database")
db.connect()


app.use(express.json())


//usar as rotas
const livrosRouter = require("./src/routes/livros.routes")
app.use("/livros", livrosRouter)


app.listen(3333, ()=> console.log("servidor rodando"))