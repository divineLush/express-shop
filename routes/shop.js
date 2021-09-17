const ex = require('express')

const router = ex.Router()

router.get('/', (req, res, next) => {
    res.send('<h1>hello from express</h1>')
})

module.exports = router
