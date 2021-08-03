const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    email: { type: String },
    userName: { type: String },
    password: { type: String },
    name:{type:String},
    adress:{type:String},
    phone:{type:String}
},{
    timestamps: true
})
module.exports = mongoose.model('User',User,'Users')