const mongoose = require('mongoose')
const Schema = mongoose.Schema
const diachi = new Schema({
    email: { type: String },
    name: { type: String },
    type: { type: String },
    slug: { type: String },
    name_with_type: { type: String },
    path:{ type: String },
    path_with_type: { type: String },
    code: { type: Number },
    parent_code: { type: Number }
},{
    timestamps: true
})
module.exports = mongoose.model('diachi',diachi,'diachi')