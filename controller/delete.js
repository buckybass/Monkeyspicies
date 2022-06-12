const Product = require("../models/product")

module.exports = (req, res) => {
    if (req.session.login) {
        Product.findByIdAndDelete(req.params.id, { useFindAndModifyDelete: false }).exec(err => {
            if (err) { console.log(err) }
            res.redirect('/manage')
        })
    } else {
        res.render('login', { path: "manage" })
    }

}