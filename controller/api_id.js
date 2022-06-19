const Product = require("../models/product")

module.exports=async (req,res) => {
    const id = req.params.id
    await Product.findOne({_id:id}).exec((err,doc)=>{
        if(err){
            return res.json ({'erorr':"Not Found"})
        }else{
            return res.json(doc)
        }
    })
}