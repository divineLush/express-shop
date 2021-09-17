const path = require('path')

const ex = require('express')

const router = ex.Router()

const products = []

// /admin/add-product
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
    res.render('add-product', { title: 'add product' })
})

// only fire for post requests
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

exports.routes = router
exports.products = products
