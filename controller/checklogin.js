

module.exports = (req, res) => {
    password = "5757"
    timeExpire = 30000
    if (req.body.password === password) {
        req.session.password = req.body.password
        req.session.login = true
        req.session.cookie.maxAge = timeExpire
        res.redirect(req.body.path)
    } else {
        res.render('404')
    }
}