const Product = require("../models/product")

module.exports = (req, res) => {
    let data = {
        name: req.body.name,
        price: req.body.price,
        detail: req.body.detail
    }
    Product.findByIdAndUpdate(req.body.update_id, data, ((err) => {
        if (err) { console.log(err) }
        res.redirect('/manage')
    }))
}