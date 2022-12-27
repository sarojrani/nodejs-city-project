const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const route=require("./Router/route")
const app=express()

app.use(bodyParser.json())
mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://yogesh_beldar:Oh9CU4nZCayFGTeC@cluster0.zveoo.mongodb.net/saroj9955-db")
.then(()=>{
    console.log("mongodb is connected")
})
.catch((err)=>{
    console.log(err)
})
app.use("/",route)

let port=4000;
app.listen(port || 4000,(err)=>{
    if(!err){
        console.log(`connected in port no ${port}`)
    }
    else {
        console.log(err)
    }
}

)
