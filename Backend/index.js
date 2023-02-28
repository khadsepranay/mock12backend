require('dotenv').config()
let express = require('express')
let cors = require('cors')
let app = express()
let Port = process.env.Port
let DB_URL = process.env.DB_URL
let Connect = require('./Config/db.js')
let OLX = require('./Router/olx.router')

app.use(cors())
app.use(express.json())
app.use('/product',OLX)


Connect(DB_URL).then((res)=>{
    app.listen(Port,()=>{
        console.log(`Listening to Port ${Port}`)
    })
}).catch((err)=>{
    console.log(err)
})