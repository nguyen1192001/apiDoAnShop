const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loaisanpham = new Schema({
  tenloaisp: { type: String}
}, {
  timestamps: true
})

module.exports = mongoose.model('loaisanpham', loaisanpham, 'loaisanpham')