const express = require("express")
const router = express.Router()

const Livro = require("../models/livro")

// Create -> Post
router.post("/", async (req, res)=>{
   //crie um novo livro
   const livro = new Livro({
      nome: req.body.nome,
      autora: req.body.autora,
      paginas: req.body.paginas,
      criadoEm: req.body.criadoEm
   })

   //tentar mandar uma resposta e salvar no mongo
   try {
      const novoLivro = await livro.save() // aqui que está salvando no banco de dados
      res.status(201).json(novoLivro) // enviando resposta do servidor
   } catch (err){
      res.status(400).json({message: err.message})
   }
})

//Read -> Get

router.get("/", async (req, res)=>{
   const livros = await Livro.find() //listando todos os livros
   res.status(200).json(livros)
})

//Update -> Patch

router.patch("/", (req, res)=>{
   
})

//Delete -> Delete

router.delete("/", (req, res)=>{
   
})

module.exports = router