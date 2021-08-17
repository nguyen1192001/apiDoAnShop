const express = require('express')
const products = require('./model/products')
const router = express.Router();

router.get('/', (req, res) => {
    products.find({})
        .then((item) => res.json(item))
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log("fdsafgdsags",id)
    products.findOne({_id : id})
        .then((product) => {
            res.json(product)
        })
        .catch((err) => console.log(err))
})


router.post('/', (req, res) => {
    if (req.body.title == ""|| req.body.price == "" ||
     req.body.description == ""||req.body.image==""||req.body.category=="" ) {
        return res.json({
            error:true
        })
    } else {
        const product = new products(req.body)
        product.save()
            .then((product) => res.json(product))
            .catch(error => {
                res.send('error')
            })
    }

})
router.delete('/:_id', (req, res) => {
    products.deleteOne({ _id: req.params._id })
        .then((item) => res.json(item))
})


router.post('/:_id', (req, res, next) => {
   
    console.log("body",req.body)
    products.updateOne({ _id:req.params._id }, req.body)
        .then((item) => res.json({
            error:true,
            item
        }))
        .catch(next)
})
module.exports = router;