const express = require('express')
const cart = require('./model/cart')
const router = express.Router()
router.get('/', (req, res) => {
  cart.find({})
    .then((item) => res.json(item))
})
router.post("/", async (req, res) => {
  const data = req.body
  console.log("data",data)
  const Cart = new cart(data)
  console.log("carttttttttttttttttttt",Cart)
  Cart.save()
    .then((item) => res.json(item))
});
module.exports = router;