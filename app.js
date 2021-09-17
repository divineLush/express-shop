const http = require('http')
const ex = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = ex()

// parsing req body
app.use(bodyParser.urlencoded({ extended: false }))

// router is a valid middleware
app.use(adminRoutes)
app.use(shopRoutes)

const server = http.createServer(app)
server.listen(3000)
