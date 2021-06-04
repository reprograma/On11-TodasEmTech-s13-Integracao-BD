const express = require('express')
const router = express.Router()

const controller = require('../controllers/livrosController')

//Create/Criar -> Post
router.post('/', controller.criaLivro)

//Read/Ler -> Get
router.get('/', controller.listaLivros)

//Read/Ler -> Get
router.get('/:id', controller.listaUmLivro)

//Update/atualizar -> Patch
router.patch('/:id', controller.atualizaLivro)

//Delete/deletar -> Delete
router.delete('/:id', controller.deletaLivro)

module.exports = router