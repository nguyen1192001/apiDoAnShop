const mongoose = require('mongoose')
let link = 'mongodb://localhost:27017/API_SHOP'
 async function connect(){
    try{
        await mongoose.connect(link,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully!!!')
    }catch (error) {
        console.log('connect faillue !!!')
    }
 }
 
 
 module.exports = {connect}