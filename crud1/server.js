const express = require("express") 
const app = express()

//configuração para conectar mongodb


app.use(express.json())


//conectar a nossa rota

const alunasRoutes = require('./alunas.routes')

app.use("/alunas", alunasRoutes)

app.listen(3333, ()=> console.log("server started"))


