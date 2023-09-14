const { Router } = require('express')
const productManager = require('../../managers/product.manager')
const {getById, getAll, deleteById, create, putPatch, } = require('../../controllers/products.controller')

const router = Router()

console.log("product manager id: ", productManager.id)
router.get('/:id', getById )

router.get('/', getAll )

router.post('/', create )

router.delete('/:id', deleteById )

router.put('/:id', putPatch )

module.exports = router