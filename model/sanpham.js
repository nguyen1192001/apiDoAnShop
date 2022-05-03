const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sanpham = new Schema({
  tensp: { type: String},
  mota:{ type: String },
  soluongcon:{ type: Number },
  gia: { type: Number },
  hinhanh:{type:String},
  maloai:{type:String}
}, {
  timestamps: true
})

module.exports = mongoose.model('sanpham', sanpham, 'sanpham')