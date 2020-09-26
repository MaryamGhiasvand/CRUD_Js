// const { Router } = require('express')
const express = require('express')
const { Mongoose } = require('mongoose')
const alienModel = require('../models/alien')
 

const router = express.Router()

//the class level URL is router
router.get('/', async(req,res)=>{ //for working with DB always use async
    //what to do when you receive the req
    //res.send('sent')  --> send as text or html

    //get data from db by mongoose schema
    try{
        console.log("alien get all method")
        const aliens = await alienModel.find()  //we are waiting for this method to come back --> create a new thread for this task
        res.json(aliens) //convert to json to send to client --> for mongo we should convert to JSON
    }
    catch(err){
        console.log('Error '+err)
    }
})

//get 1 specific record:
router.get('/:id', async(req,res)=>{ //pass the Id in path variable (not query string)
    try{
        console.log("alien get 1 method")
        const alien = await alienModel.findById(req.params.id)  //id comes from PARAMS
        res.json(alien)  
    }
    catch(err){
        console.log('Error '+err)
    }
})

router.post('/',async (req,rsp)=>{
    console.log("alien post method")
    console.log(req.body)
    const alien1 = new alienModel({
        name: req.body.name,
        tech: req.body.tech,
        sub:req.body.sub
    })
    try{
        const a =await alien1.save() //can return the same obj as output
        rsp.json(a)
    }
    catch(err){//has object of error
        console.log('Error '+err)
    }
})

module.exports=router