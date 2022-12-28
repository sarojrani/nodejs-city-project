const CityModel=require("../Models/CityModel")


let cityregex=/^[a-zA-z]+$/;

const createCity=async function(req,res){
    try {
        let data=req.body;
        let {cityName}=data
        if(!cityregex.test(cityName)){
            return res.status(300).send({code:"300",msg:"city name does not contain numeric character"})
        }   
        let finddetail=await CityModel.findOne({cityName:cityName})
        
        if(finddetail){
            return res.status(300).send({code:"300",msg:"city name should be unique"})
        }
        let detail=await CityModel.create(data)
        return res.status(200).send({code:"200",msg:"city name inserted"})
        
    } catch (error) {
        return res.status(500).send({code:"500",msg:error.msg})
    }
}
const getCity=async function(req,res){
    try{
    let getdetail=await CityModel.find()
    return res.status(200).send({code:"200",msg:"get all deatail", data:getdetail})
    }
    catch (error) {
        return res.status(500).send({code:"500",msg:error.msg})
    }
}
module.exports={createCity,getCity}