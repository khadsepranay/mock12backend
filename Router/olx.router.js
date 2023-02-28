let express = require('express')
let OLX = express.Router()
let olxModel = require('../Model/olx.model')


OLX.get('/',async(req,res)=>{
    let query = req.query
    let page = query.page
    delete query.page
    try{
        let arr = await olxModel.find()
        if(query.name){
            let Products = await olxModel.find().limit(4).skip(4*(page-1))
            let newProducts = Products.filter((el)=>{
                return el.name.includes(query.name)
            })
            res.send({data:newProducts,length:arr.length})
            return
        }
        let Products = await olxModel.find({...query}).limit(4).skip(4*(page-1))
        res.send({data:Products,length:arr.length})
    }catch(err){
        res.send(err)
    }
})

OLX.post('/',async(req,res)=>{
    let info = req.body
    try{
        let Products = await olxModel.create({...info})
        res.send('Product has been added')
    }catch(err){
        console.log(err)
    }
})

OLX.delete('/:id',async(req,res)=>{
    try{
        let id = req.params.id
        let Product = await olxModel.deleteOne({_id:id})
        res.send(`Product with id ${id} has been deleted successfully`)
    }catch(err){
        console.log(err)
    }
})

module.exports = OLX