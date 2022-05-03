const mongoose = require('mongoose')
const Schema = mongoose.Schema

const phieugiaohang = new Schema({
    dondathang: { type: Object },
    nguoivc:{type:Object},
    ngaygiao: { type: String },
    trangthai:{type:String}
}, {
    timestamps: true
})

module.exports = mongoose.model('phieugiaohang', phieugiaohang, 'phieugiaohang')