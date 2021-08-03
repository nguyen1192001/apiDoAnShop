const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Cart = new Schema({
  '0': [
    {
      id: { type: String, required: true },
      title: { type: String },
      price: { type: String },
      description: { type: String },
      category: { type: String },
      img: { type: String },
    }
  ],
  '1': 
    {
      name:{type:String},
    adress:{type:String},
    phone:{type:String}
    }
},
  { timestamps: true }
)
module.exports = mongoose.model('Cart', Cart, 'Carts')