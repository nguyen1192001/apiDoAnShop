const mongoose = require('mongoose')
const Schema = mongoose.Schema


const dondathang = new Schema({
  '0': [
    {
      masp: { type: String },
      tensp: { type: String },
      gia: { type: String },
      mota: { type: String },
      maloai: { type: String },
      hinhanh: { type: String },
    }
  ],
  '1':
  {
    tenkh: { type: String },
    diachi: { type: Object },
    sdt: { type: String }
  },
  '2':{type:Number}, // số lượng
  '3':{type:Number}, // tổng tiền
  '4':{type:String},   // ngày đặt
  '5':{type:String} // trạng thái
},
  { timestamps: true }
)
module.exports = mongoose.model('dondathang', dondathang, 'dondathang')