const mongoose = require('mongoose')

const connect = async () => {
    let conectado = await mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    try {
        console.log('conectado! ')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connect };