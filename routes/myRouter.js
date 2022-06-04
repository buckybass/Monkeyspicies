const express = require('express')
const { redirect } = require('express/lib/response')
const router = express.Router()
const Product = require('../models/product')
const multer = require('multer')
const session = require('express-session')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/products')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + ".jpg")
    }
})

const upload = multer({
    storage: storage
})

router.get('/', (req, res) => {
    Product.find().exec((err, doc) => {
        res.render('index', { product: doc })
    })

})

router.get('/form', (req, res) => {
    if (req.session.login) {
        res.render('form')
        console.log(req.session)
        console.log(req.sessionID)
    } else {
        res.render('login', { path: "form" })
    }
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/checklogin', (req, res) => {
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
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/')
    })
})

router.get('/manage', (req, res) => {
    if (req.session.login) {
        Product.find().exec((err, doc) => {
            res.render('manage', { product: doc })
        })
    } else {
        res.render('login', { path: "manage" })
    }
})

router.post('/insert', upload.single("img"), (req, res) => {
    let data = new Product({
        name: req.body.name,
        price: req.body.price,
        img: req.file.filename,
        detail: req.body.detail
    })
    Product.createProduct(data, (err) => {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
})

router.get('/:id', (req, res) => {
    Product.findOne({ _id: req.params.id }).exec((err, doc) => {
        res.render('product', { product: doc })
    })
})

router.post('/edit', (req, res) => {
    if (req.session.login) {
        Product.findOne({ _id: req.body.edit_id }).exec((err, doc) => {
            res.render('edit', { product: doc })
        })
    } else {
        res.render('login', { path: "manage" })
    }

})

router.post('/update', (req, res) => {
    let data = {
        name: req.body.name,
        price: req.body.price,
        detail: req.body.detail
    }
    Product.findByIdAndUpdate(req.body.update_id, data, ((err) => {
        if (err) { console.log(err) }
        res.redirect('/manage')
    }))

})

router.get('/delete/:id', (req, res) => {
    if (req.session.login) {
        Product.findByIdAndDelete(req.params.id, { useFindAndModifyDelete: false }).exec(err => {
            if (err) { console.log(err) }
            res.redirect('/manage')
        })
    } else {
        res.render('login', { path: "manage" })
    }

})


module.exports = router


// router.get('/', (req, res) => {
//     res.status(200)
//     res.type("text/html")
//     res.sendFile(path.join(__dirname, 'templates/index.html')
//     )
// })

// router.get('/product/:id', (req, res) => {
//     const productid= req.params.id
//     res.status(200)
//     res.type("text/html")
//     if (productid <4){
//     res.sendFile(path.join(__dirname, `templates/product${productid}.html`)
//     )}else {
//         res.redirect('/') // เปลี่ยน path ไปที่ '/' หน้าแรก
//     }
// })

