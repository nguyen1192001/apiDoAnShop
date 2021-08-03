const users = require('../model/users')
module.exports.requireAuth = function(req,res,next){
   res.send(req.cookie.userId)
    // if(req.cookie.userId==undefined){
    //     res.send('form dang nhap ne')
    //     return
    // }
    // users.findOne({})
    // then((data)=>{
    //     const email = mongooseToObject(data).email
    //     if(email !== req.cookie.userId){
    //         res.send('form dang nhap ne')
    //     }
    // }).catch(next)
}