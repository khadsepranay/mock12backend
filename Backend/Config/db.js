
let mongoose = require('mongoose')

let connect = (DB_URL)=> mongoose.connect(DB_URL)

module.exports = connect