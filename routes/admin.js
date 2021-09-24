const ex = require('express')

const router = ex.Router()

const adminController = require('../controllers/admin')

// /admin/add-product
router.get('/add-product', adminController.getAddProducts)
router.get('/products', adminController.getProductList)
router.get('/edit-product', adminController.getEditProduct)

// only fire for post requests
router.post('/add-product', adminController.postAddProducts)

router.post('/delete-product/:id', adminController.deleteProduct)

module.exports = router
// exports.routes = router
// exports.products = products
