const mongoose = require('mongoose')
const Schema = mongoose.Schema

const khachhang = new Schema({
    email: { type: String },
    matkhau: { type: String },
    tenkh:{type:String},
    diachi:{type:Object},
    sdt:{type:String}
},{
    timestamps: true
})
module.exports = mongoose.model('khachhang',khachhang,'khachhang')