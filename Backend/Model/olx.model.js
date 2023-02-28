let mongoose = require('mongoose')

let olxSchema = new mongoose.Schema({
    name : String,
    description : String,
    category : String,
    image : String,
    location : String,
    postedAt : String,
    price : Number
})

let olxModel = mongoose.model('olxs',olxSchema)

module.exports = olxModel