const Product = require('../models/product')

exports.getAddProducts = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
    res.render('add-product', { title: 'add product' })
}

exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    // __dirname holds an absolute path on OS to this project folder
    // so __dirname will point to the routes/ folder in this case
    // path.join() will build a path that works both on linux & windows
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))

    Product.fetchAll((products) => {
        // pass data to template
        res.render('shop', {
            products,
            title: 'shop',
        })
    })
}
