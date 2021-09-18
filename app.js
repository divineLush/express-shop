const http = require('http')
const path = require('path')

const ex = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const error = require('./controllers/error')

const app = ex()

app.set('view engine', 'pug')
// app.set('views', 'views')

// parsing req body
app.use(bodyParser.urlencoded({ extended: false }))

// serving files statically
// now i can do <link rel="stylesheet" href="/css/main.css">
app.use(ex.static(path.join(__dirname, 'public')))

// router is a valid middleware
app.use('/admin', adminRoutes)
app.use(shopRoutes)

// notfound page
app.use(error.getNotFound)

const server = http.createServer(app)
server.listen(3000)
