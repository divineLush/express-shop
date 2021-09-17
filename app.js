const http = require('http')
const path = require('path')

const ex = require('express')
const bodyParser = require('body-parser')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = ex()

app.set('view engine', 'pug')
// app.set('views', 'views')

// parsing req body
app.use(bodyParser.urlencoded({ extended: false }))

// serving files statically
// now i can do <link rel="stylesheet" href="/css/main.css">
app.use(ex.static(path.join(__dirname, 'public')))

// router is a valid middleware
app.use('/admin', adminData.routes)
app.use(shopRoutes)

// 404 page
app.use((req, res, next) => {
    // const file = path.join(__dirname, 'views', '404.html')
    // res.status(404).sendFile(file)
    res.status(404).render('404')
})

const server = http.createServer(app)
server.listen(3000)
