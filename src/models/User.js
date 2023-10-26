const mongoose = require('./index')
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:(true,"firstname")    },
 
    lastName:{
        type:String,
        required:(true,"lastname reqired")
    },
 
    email:{
        type:String,
        required:(true,"email required")},
 
    status:{
     type:Boolean,
     default:true
    },
  createdAt:{type:Date,default:new Date()
    }
}
)

const userModel=mongoose.model('user',userSchema)
module.exports = userModel