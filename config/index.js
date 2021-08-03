const mongoose = require('mongoose')
const serverOptions = {
    poolSize: 100,
    socketOptions: {
      socketTimeoutMS: 60000
    }
  };
mongoose.createConnection(dbpath, {
    server: serverOptions,
    replset: serverOptions
  });
 async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/API_SHOP',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully!!!')
    }catch (error) {
        console.log('connect faillue !!!')
    }
 }
 
 
 module.exports = {connect}