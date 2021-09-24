const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

const { productsPath } = require('../utils/paths')

class Product {
    constructor(title, desc, price) {
        this.title = title
        this.desc = desc
        this.price = price
        this.id = uuidv4()
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
            cb(err ? [] : JSON.parse(fileBuff))
        })
    }

    static findByID(id, cb) {
        Product.fetchAll((products) => {
            cb(products.find(el => el.id === id))
        })
    }

    static delete(id, cb) {
        Product.fetchAll((products) => {
            const filteredProducts = products.filter(el => el.id !== id)

            if (filteredProducts.length === products.length) {
                cb()
                return
            }

            fs.writeFile(productsPath, JSON.stringify(filteredProducts), (err) => {
                if (err) {
                    console.log(err)
                    return
                }

                cb()
            })
        })
    }
}

module.exports = Product
