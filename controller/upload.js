const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/products')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + ".jpg")
    }
})

module.exports = multer({
    storage: storage
})

