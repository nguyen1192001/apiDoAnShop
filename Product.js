const express = require('express')
const products = require('./model/products')
const router = express.Router();

router.get('/', (req, res) => {
        products.find({})
        .then((item) => res.json(item))
})

router.get('/:id',(req, res) => {
    const id = req.params.id;
    console.log(id)
    products.findOne({id})
      .then((product) => {
        res.json(product)
      })
      .catch((err) => console.log(err))
})


router.post('/', (req, res) => {
    const product = new products(req.body)
    product.save()
    .then(() => res.json(product))
    .catch(error => {
        res.send('error')
    })
})
router.delete('/:id', (req, res) => {
    products.deleteOne({ _id: req.params.id })
    .then((item) => res.json(item))
})


router.put('/:id', (req, res,next) => {
    products.updateOne({ _id: req.params.id }, req.body)
    .then(() => res.redirect('/'))
    .catch(next)
})
module.exports = router;