const Product = require("../models/product")

module.exports = async (req,res) => {
    product = await Product.find()
    res.json(product)
}


