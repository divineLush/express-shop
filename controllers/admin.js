const Product = require('../models/product')

exports.getAddProducts = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
    res.render('admin/add-product', { title: 'add product' })
}

exports.postAddProducts = (req, res, next) => {
    const { title, desc, price } = req.body
    const product = new Product(title, desc, price)
    product.save()
    res.redirect('/')
}

exports.getProductList = (req, res, next) => {
    Product.fetchAll((products) => {
        // pass data to template
        res.render('admin/admin-product-list', {
            products,
            title: 'admin product list',
        })
    })
}

exports.getEditProduct = (req, res, next) => {
    res.render('admin/edit-product', { title: 'admin edit product' })
}

exports.deleteProduct = (req, res, next) => {
    Product.delete(req.params.id, () => { res.redirect('/products') })
}
