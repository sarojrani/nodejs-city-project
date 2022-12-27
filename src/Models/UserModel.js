const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    city:{
        type:String,
        required:true  
    },
    name:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number
    },
    mediaurl:{
        type:String
    }
},
{timestamps:true}
)
module.exports=mongoose.model("user",userSchema)