const path = require('path')

const ex = require('express')

const adminData = require('./admin')

const router = ex.Router()

router.get('/', (req, res, next) => {
    // __dirname holds an absolute path on OS to this project folder
    // so __dirname will point to the routes/ folder in this case
    // path.join() will build a path that works both on linux & windows
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))

    // pass data to template
    res.render('shop', {
        title: 'shop',
        products: adminData.products
    })
})

module.exports = router
