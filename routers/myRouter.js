const express = require('express')
// const router = require('express')
const myRouer = express.Router()

myRouer.get('/', (req,rsp)=>{
    console.log("in my router")
    rsp.send("My router works")
})

module.exports=myRouer