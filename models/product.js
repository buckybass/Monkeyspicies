//ใช้งาน mongoose
const mongoose = require('mongoose')

//เชื่อม mongoose
const dburl = "mongodb://localhost:27017/prodcutDB"
mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error => console.log(error))

// ออกแบบ Schema
let productSchema = mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    detail: String
})

//สร้าง Model
let Product = mongoose.model("product",productSchema)

//ส่งออก model
module.exports = Product
module.exports.createProduct=(model,data)=>{
    model.save(data)
}