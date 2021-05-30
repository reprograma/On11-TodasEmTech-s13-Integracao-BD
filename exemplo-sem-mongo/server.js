const express = require('express')
const app = express()

//configuracao para conectar mongodb

app.use(express.json())

//conectar a nossa rotas
const alunaRoutes = require('./alunas.routes')
app.use('/alunas', alunaRoutes)

app.listen(3333, () => console.log('server started'))