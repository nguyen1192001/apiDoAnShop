const express = require('express')
const sanpham = require('./model/sanpham')
// const  = require('./config/index')
const router = express.Router();

router.get('/', (req, res) => {
    sanpham.find({})
        .then((item) => res.json(item))
        .catch((err)=>{
            console.log("error",err)
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log("fdsafgdsags",id)
    sanpham.findOne({_id : id})
        .then((product) => {
            res.json(product)
        })
        .catch((err) => console.log(err))
})

router.post('/:_id', (req, res, next) => {
   
    console.log("body",req.body)
    sanpham.updateOne({ _id:req.params._id }, req.body)
        .then((item) => res.json({
            error:true,
            item
        }))
        .catch(next)
})


router.post('/', (req, res) => {
    if (req.body.title == ""|| req.body.price == "" ||
     req.body.description == ""||req.body.image==""||req.body.category=="" ) {
        return res.json({
            error:true
        })
    } else {
        const product = new sanpham(req.body)
        product.save()
            .then((product) => res.json(product))
            .catch(error => {
                res.send('error')
            })
    }

})
router.delete('/:_id', (req, res) => {
    sanpham.deleteOne({ _id: req.params._id })
        .then((item) => res.json(item))
})



module.exports = router;