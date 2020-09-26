const express= require('express')
const mongoose = require('mongoose')
//run the express => by the name of app
const app = express();

// create application/json parser => otherwise express can not recognize body from client(postman)
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);




//qdata base URL
const url = 'mongodb://localhost:27017/CRUD_db'
//connect to db
mongoose.connect(url,{useNewUrlParser:true})

// //get the connection object
// const connection = mongoose.connection

// connection.on('open',function(){
//     console.log('connected ...') //because it may take time
// })

//app.use(express.json) //to be accessible in whole project

//import and map request to specific router
const alienRouter = require('./routers/aliens')

//= class level requestMapping
app.use('/aliens',alienRouter) //if you received the /aliens go to this js file

//listen to port 8000
app.listen(9000,()=>{ //= function() , for function when we dont have name we can use () =>
    console.log('server started')
})



//my router
const myRouter = require('./routers/myRouter')
app.use('/api/myRouter',myRouter)