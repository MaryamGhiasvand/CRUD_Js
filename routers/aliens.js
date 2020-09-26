const { Router } = require('express')
const express = require('express')

const router = express.Router()

//the class level URL is router
router.get('/',(req,res)=>{
    //what to do when you receive the req
    // console.log('Get request')
    res.send('sent')
})

module.exports=router