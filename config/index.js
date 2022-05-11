const mongoose = require('mongoose');
 async function connect(){
    try{
        await mongoose.connect('mongodb+srv://ThaoNguyen:123@cluster0.5ak4b.mongodb.net/DBGiaoThucAnNhanh?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        });
        console.log('connect successfully!!!')
    }catch (error) {
        console.log('connect faillue !!!')
    }
 }
 
 
 module.exports = {connect}