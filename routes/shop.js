const ex = require('express')

const shopController = require('../controllers/shop')

const router = ex.Router()

router.get('/', shopController.getIndex)
router.get('/products', shopController.getProducts)
router.get('/cart', shopController.getCart)
router.get('/checkout', shopController.getCheckout)
router.get('/orders', shopController.getOrders)

module.exports = router
