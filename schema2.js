const mongoose=require('mongoose')
const dishSchema=mongoose.Schema({
    dishName:{
        type:[String],
        default:true,
        unique:true,
        
    },
    Cost:{
type:Number,
default:true,
unique:true,

    },
    item:String,
    default:true,
unique:true,

})
module.exports=mongoose.model("user",dishSchema)