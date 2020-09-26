const { Router } = require('express')
const express = require('express')
const { Mongoose } = require('mongoose')
const alien = require('../models/alien')
const aliensModel= require('../models/alien')

const router = express.Router()
app

//the class level URL is router
router.get('/', async(req,res)=>{ //for working with DB always use async
    //what to do when you receive the req
    //res.send('sent')  --> send as text or html

    //get data from db by mongoose schema
    try{
        console.log("get method")
        const aliens = await aliensModel.find()  //we are waiting for this method to come back --> create a new thread for this task
        res.json(aliens) //convert to json to send to client --> for mongo we should convert to JSON
    }
    catch(err){
        console.log('Error '+err)
    }
})

//get 1 specific record:
router.get('/:id', async(req,res)=>{ //pass the Id
    try{
        console.log("get method")
        const aliens = await aliensModel.findById(req.params.id)  //id comes from PARAMS
        res.json(aliens) 
    }
    catch(err){
        console.log('Error '+err)
    }
})

router.post('/',async (req,rsp)=>{
    const alien1 = new aliensModel({
        name: req.body.name,
        tech: req.body.tech,
        sub:true
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