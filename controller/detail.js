const Product = require("../models/product")

module.exports=(req, res) => {
    Product.findOne({ _id: req.params.id }).exec((err, doc) => {
        res.render('product', { product: doc })
    })
}