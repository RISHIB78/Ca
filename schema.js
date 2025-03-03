const mongoose=require('mongoose')
const resturantSchema=mongoose.Schema({
    Name:{
        type:String,
        default:true,
        min:2,
        max:4
    },
    location:{
type:String,
default:true,
unique:true,
contact:Number
    }
})
module.exports=mongoose.model("user",resturantScheman)