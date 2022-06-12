const Product = require("../models/product")

module.exports = (req, res) => {
    if (req.session.login) {
        Product.findOne({ _id: req.body.edit_id }).exec((err, doc) => {
            res.render('edit', { product: doc })
        })
    } else {
        res.render('login', { path: "manage" })
    }

}