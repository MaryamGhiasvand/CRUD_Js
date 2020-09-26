const mongoose = require('mongoose')
//we say monngoose that we want db with this schema
const alienSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    tech :{
        type:String,
        require:true
    },
    sub:{
        type: Boolean,
        require:true,
        default:false
    }
})