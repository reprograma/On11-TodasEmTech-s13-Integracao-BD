const express = require("express")
const router = express.Router()
const controller = require("../controllers/livrosController")

const Livro = require("../models/livro")

// Create -> Post
router.post("/", controller.criarLivro)

//Read/Ler -> Get
router.get('/', controller.listaLivros)

router.get('/:id', controller.listaUmLivro)

//Update/atualizar -> Patch
router.patch('/:id', controller.atualizaLivro)

//Delete/deletar -> Delete
router.delete('/:id', controller.deletaLivro)

module.exports = router