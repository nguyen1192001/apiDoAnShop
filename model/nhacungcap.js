const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nhacungcap = new Schema({
    email: { type: String },
    password: { type: String },
    tenncc:{type:String},
    diachi:{type:String},
    sdt:{type:String}
},{
    timestamps: true
})
module.exports = mongoose.model('nhacungcap',nhacungcap,'nhacungcap')