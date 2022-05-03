const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nguoivanchuyen = new Schema({
    email: { type: String },
    matkhau: { type: String },
    tennguoivc:{type:String},
    sdt:{type:String}
},{
    timestamps: true
})
module.exports = mongoose.model('nguoivanchuyen',nguoivanchuyen,'nguoivanchuyen')