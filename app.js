const http = require('http')
const ex = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = ex()

// parsing req body
app.use(bodyParser.urlencoded({ extended: false }))

// router is a valid middleware
app.use('/admin', adminRoutes)
app.use(shopRoutes)

// 404 page
app.use((req, res, next) => {
    res.status(404).send('<h1>not found</h1>')
})

const server = http.createServer(app)
server.listen(3000)
