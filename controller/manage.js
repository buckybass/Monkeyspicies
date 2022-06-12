const Product = require('../models/product')

module.exports= (req, res) => {
    if (req.session.login) {
        Product.find().exec((err, doc) => {
            res.render('manage', { product: doc })
        })
    } else {
        res.render('login', { path: "manage" })
    }
}