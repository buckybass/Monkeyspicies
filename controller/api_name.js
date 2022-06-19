const Product = require("../models/product")

module.exports=async (req,res) => {
    const name = req.params.name
    await Product.findOne({name:name}).exec((err,doc)=>{
        if(err){
            return res.json ({'erorr':"Not Found"})
        }else{
            return res.json(doc)
        }
    })
}