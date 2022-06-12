const Product = require('../models/product')

module.exports= (req, res) => {
    let data = new Product({
        name: req.body.name,
        img: req.file.filename,
        detail: req.body.detail
    })
    Product.createProduct(data, (err) => {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
}