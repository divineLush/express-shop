const fs = require('fs')

const { productsPath, cartPath } = require('../utils/paths')

class Cart {
    static addProduct(id, cb) {
        fs.readFile(productsPath, (err, productsBuff) => {
            const products = err ? [] : JSON.parse(productsBuff)
            const productToAdd = products.find(p => p.id === id)

            if (!productToAdd) return;

            fs.readFile(cartPath, (err, fileBuff) => {
                const currentCart = err ? { products: [], total: 0 } : JSON.parse(fileBuff)
                const productIdx = currentCart.products.findIndex(p => p.id === id)

                const total = currentCart.total + +productToAdd.price
                const products = productIdx === -1
                    ? (() => {
                        const newProduct = {
                            ...productToAdd,
                            quantity: 1
                        }

                        return [...currentCart.products, newProduct]
                    })()
                    : (() => {
                        const newProducts = [...currentCart.products]
                        newProducts[productIdx].quantity += 1

                        return newProducts
                    })()

                const newCart = { products, total }
                fs.writeFile(cartPath, JSON.stringify(newCart), (err) => {
                    console.log(err)
                    cb()
                })
            })
        })
    }
}

module.exports = Cart
