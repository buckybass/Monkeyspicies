const Product = require('../models/product')

module.exports=(req, res) => {
    Product.find().exec((err, doc) => {
        res.render('index', { product: doc })
    })
}