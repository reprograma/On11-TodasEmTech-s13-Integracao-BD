const express = require('express')
const router = express.Router()

const Livro = require('../models/livro')

//Create/Criar -> Post
router.post('/', async (req, res)=>{
    //crie um novo livro
    const livro = new Livro({
        nome: req.body.nome,
        autora: req.body.autora,
        paginas: req.body.paginas,
        criadoEm: req.body.criadoEm
    })
    //tentar mandar uma resposta e salvar no mongo
    try {
        const novoLivro = await livro.save() //que está salvando no banco de dados 
        res.status(201).json(novoLivro) // enviando resposta do servidor
    }catch (err){ // se nao conseguir criar, me diga qual foi o erro
        res.status(400).json({message: err.message})
    }
})

//Read/Ler -> Get
router.get('/', async (req, res)=> {
    const livros = await Livro.find() //listando todos livros que estao salvos no MongoDB
    res.status(200).json(livros) //enviando resposta do servidor
})

//Update/atualizar -> Patch
router.patch('/', (req, res)=>{

})

//Delete/deletar -> Delete
router.delete('/', (req, res)=>{

})

module.exports = router