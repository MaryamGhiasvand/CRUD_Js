const express= require('express')
const mongoose = require('mongoose')

//run the express
const app = express()

//qdata base URL
const url = '//localhost/CRUD_db'
//connect to db
//mongoose.connect(url,{useNewUrlParser:true})

//get the connection object
//const connection = mongoose.connection

// connection.on('open',function(){
//     console.log('connected ...') //because it may take time
// })

app.use(express.json) //to be accessible in whole project

//import and map request to specific router
const alienRouter = require('./routers/aliens')

//= class level requestMapping
app.use('/aliens',alienRouter) //if you received the /aliens go to this js file

//listen to port 9000
app.listen(8000,()=>{ //= function() , for function when we dont have name we can use () =>
    console.log('server started')
})