module.exports = (req, res) => {
    if (req.session.login) {
        res.render('form')
    } else {
        res.render('login', { path: "form" })
    }
}