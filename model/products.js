const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  id:{type: String },
  title: { type: String},
  price: { type: String },
  description:{ type: String },
  category:{ type: String },
  image: { type: String },
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', Product, 'products')