const express = require("express")

const router = express.Router()

let alunas = [
   {
      id: 1,
      nome: "Karlla",
      conteudoFavorito: "API",
      criadoEm: new Date().toLocaleDateString("pt-BR")
   },
   {
      id: 2,
      nome: "Ana Carol",
      conteudoFavorito: "Lógica de Programação",
      criadoEm: new Date().toLocaleDateString("pt-BR")
   },
   {
      id: 3,
      nome: "Helena de Araújo",
      conteudoFavorito: "API",
      criadoEm: new Date().toLocaleDateString("pt-BR")
   }
]


//getALl - get

//localhost:3333/alunas

router.get("/", (req, res) =>{
   res.json(alunas)
})

//Create - post - body

router.post("/", (req, res) =>{
   const aluna = {
      id: 4,
      nome: "Amanda",
      conteudoFavorito: "Banco de dados",
      criadoEm: new Date().toLocaleDateString("pt-BR")
   }

   alunas = [...alunas, aluna] 

   res.status(201).json(aluna)

})


module.exports = router