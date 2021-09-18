const ex = require('express')

const productsController = require('../controllers/products')

const router = ex.Router()

router.get('/', productsController.getProducts)

module.exports = router
