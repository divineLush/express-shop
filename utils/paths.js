const path = require('path')

const root = path.dirname(process.mainModule.filename)

exports.cartPath = path.join(root, 'data', 'cart.json')
exports.productsPath = path.join(root, 'data', 'products.json')
