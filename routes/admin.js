const ex = require('express')

const router = ex.Router()

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">add product</button></form>')
})

// only fire for post requests
router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router
