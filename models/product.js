//ใช้งาน mongoose
const mongoose = require('mongoose')

//เชื่อม mongoose
const dburl = "mongodb+srv://Admin:Password@monkey.yasgbdt.mongodb.net/?retryWrites=true&w=majority"
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
let Product = mongoose.model("Monkey",productSchema)

//ส่งออก model
module.exports = Product
module.exports.createProduct=(model,data)=>{
    model.save(data)
}