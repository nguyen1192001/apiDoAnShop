const express = require('express')
const users = require('./model/users')
const router = express.Router()
const {mongooseToObject} =  require('./mongoose')
router.get('/', (req, res) => {
    users.find({})
    .then((item) => res.json(item))
})
router.post('/', (req, res,next) => {
    
   users.findOne({})
   .then((data)=>{
        const email = mongooseToObject(data).email
        const password = mongooseToObject(data).password 
        if(email !== req.body.email){
            return res.json({
                error:true,
                message:"acount does not exit"
            })
        }else{
            if(password !== req.body.password){
                return res.json({
                    error:true,
                    message:"password is wrong"
                })
            }else{
                return res.json({
                    error:false,
                    message:"success",
                    data
                })
            }
        }
       
   }).catch(next)
})

module.exports = router;