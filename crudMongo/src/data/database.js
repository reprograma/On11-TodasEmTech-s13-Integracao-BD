require("dotenv").config()

const mongoose = require("mongoose")//importa o mongoose


const connect = () => {mongoose.connect(process.env.DATABASE_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(console.log("Mongodb conectado")).catch(err => console.err)
}

module.exports = { connect }