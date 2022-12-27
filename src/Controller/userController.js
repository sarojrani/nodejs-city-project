const UserModel=require("../Models/UserModel")
const CityModel=require("../Models/CityModel")

const creteUserDeatil=async function(req,res){
    let data=req.body
    let {city,name,mobileNo,mediaurl}=data;

    let nameregex=/^[a-zA-z]+$/
    let mobileregex=/^[7-9][0-9]{9}$/
    let mediaurlRegex=/^(http||https?:\/\/.*\.(?:png|gif|jpg))/

    let getcity=await CityModel.find({cityName:city})
    if(!getcity){
        return res.status(300).send({code:"300",msg:"cityname is not present"})
    }
   if(!nameregex.test(name)){
    return res.status(300).send({code:"300",msg:"name should allow only alphabet"})
   }
    if(!mobileregex.test(mobileNo)){
        return res.status(300).send({code:"300",msg:"only indian mobileNo allow "})
    }
    if(!mediaurlRegex.test(mediaurl)){
        return res.status(300).send({code:"300",msg:"url is invalid"})
    }
    let createdata=await UserModel.create(data)
    let newuser={
            city:getcity,
            name:name,
            mobileNo:mobileNo,
            mediaurl:mediaurl
        }
    return res.status(200).send({code:"200",msg:"user detail",data:newuser })
}
module.exports={creteUserDeatil}