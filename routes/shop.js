const ex = require('express')

const shopController = require('../controllers/shop')

const router = ex.Router()

router.get('/', shopController.getIndex)

router.get('/products', shopController.getProducts)
router.get('/products/:id', shopController.getSingleProduct)

router.get('/cart', shopController.getCart)
router.post('/cart/add/:id', shopController.postAddToCart)

router.get('/checkout', shopController.getCheckout)
router.get('/orders', shopController.getOrders)

module.exports = router
