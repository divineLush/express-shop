const fs = require('fs')

const Product = require('../models/product')
const Cart = require('../models/cart')
const { cartPath } = require('../utils/paths')

exports.getProducts = (req, res, next) => {
    // __dirname holds an absolute path on OS to this project folder
    // so __dirname will point to the routes/ folder in this case
    // path.join() will build a path that works both on linux & windows
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))

    Product.fetchAll((products) => {
        // pass data to template
        res.render('shop/product-list', {
            products,
            title: 'shop',
        })
    })
}

exports.getSingleProduct = (req, res, next) => {
    const id = req.params.id
    Product.findByID(id, (product) => {
        res.render('shop/product-detail', { title: product.title, product })
    })
}

exports.getIndex = (req, res, next) => {
    res.render('shop/index', { title: 'home' })
}

exports.getCart = (req, res, next) => {
    fs.readFile(cartPath, (err, cartBuff) => {
        const { products, total } = err
            ? { products: [], total: 0 } : JSON.parse(cartBuff)

        res.render('shop/cart', { title: 'cart', products, total })
    })
}

exports.postAddToCart = (req, res, next) => {
    const id = req.params.id
    Cart.addProduct(id, () => { res.redirect('/cart') })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { title: 'checkout' })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', { title: 'orders' })
}
