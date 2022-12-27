const express=require("express")
const router=express.Router();
let CityController=require("../Controller/CityController")
const userController=require("../Controller/userController")

router.post('/city',CityController.createCity)
router.get('/cityList',CityController.getCity)

router.post('/user',userController.creteUserDeatil)
// const api="https://api.binance.com/api/v1/time"
// router.get('/api',function(req,res){
//     console.log(api)
// })

module.exports=router;