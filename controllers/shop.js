const Product = require('../models/product')

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

exports.getIndex = (req, res, next) => {
    res.render('shop/index', { title: 'home' })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', { title: 'cart' })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { title: 'checkout' })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', { title: 'orders' })
}
