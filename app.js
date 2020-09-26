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


//listen to port 9000
app.listen(9000,()=>{ //= function() , for function when we dont have name we can use () =>
    console.log('server started')
})