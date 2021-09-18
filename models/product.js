const fs = require('fs')
const path = require('path')

const productsPath = (() => {
    const root = path.dirname(process.mainModule.filename)
    return path.join(root, 'data', 'products.json')
})()

class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        fs.readFile(productsPath, (err, fileBuff) => {
            const products = err ? [] : JSON.parse(fileBuff)
            products.push(this)

            fs.writeFile(productsPath, JSON.stringify(products), (err) => {
                if (err) {
                    console.log('product.js', err)
                }
            })
        })
    }

    static fetchAll(cb) {
        fs.readFile(productsPath, (err, fileBuff) => {
            const products = err ? [] : JSON.parse(fileBuff)
            cb(products)
        })
    }
}

module.exports = Product
