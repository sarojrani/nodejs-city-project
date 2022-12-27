const mongoose=require("mongoose")

const citySchema=new mongoose.Schema({
    cityName:{
        type:String,
        required:true,
        unique:true
    },
},
{timestamps:true}
)
module.exports=mongoose.model("city",citySchema)