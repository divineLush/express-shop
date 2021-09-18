const ex = require('express')

const router = ex.Router()

const productsController = require('../controllers/products')

// /admin/add-product
router.get('/add-product', productsController.getAddProducts)

// only fire for post requests
router.post('/add-product', productsController.postAddProducts)

module.exports = router
// exports.routes = router
// exports.products = products
