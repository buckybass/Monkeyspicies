const express = require('express')
const { redirect } = require('express/lib/response')
const router = express.Router()
const Product = require('../models/product')
const upload = require('../controller/upload')
const session = require('express-session')

router.get('/',require('../controller/index'))
router.get('/form',require('../controller/form'))
router.post('/checklogin',require('../controller/checklogin'))
router.get('/logout',require('../controller/logout'))
router.get('/manage',require('../controller/manage'))
router.post('/insert',upload.single("img"),require('../controller/insert'))
router.get('/:id',require('../controller/detail'))
router.post('/edit',require('../controller/edit'))
router.post('/update', require('../controller/update'))
router.get('/delete/:id',require('../controller/delete'))


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

